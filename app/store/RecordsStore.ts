import { flow, Instance, toGenerator, types } from "mobx-state-tree"
import { getMedicalRecords } from "../services/passbase"
import { AnalysisStore } from "./models/analysis/Analysis"
import { ConsultationStore } from "./models/consultation/Consultation"
import { ExtractStore } from "./models/extract/Extract"
import { EpicrisisStore } from "./models/epicrisis/Epicrisis"
import { InitialInspectionStore } from "./models/initialInspection/InitialInspection"
import { JournalStore } from "./models/journal/Journal"
import { OperationProtocolStore } from "./models/operationProtocol/OperationProtocol"
import { PatientStore } from "./models/patient/Patient"
import { DiagnosisStore } from "./models/diagnosis/Diagnosis"
import { ResearchStore } from "./models/research/Research"
import { NormalizedRecords, RecordList, RecordType } from "../interfaces"

const RecordsStore = types
  .model("RecordsStore")
  .props({
    loading: false,
    error: types.optional(types.string, ""),
    analysis: AnalysisStore,
    consultation: ConsultationStore,
    diagnosis: DiagnosisStore,
    epicrisis: EpicrisisStore,
    extract: ExtractStore,
    initialInspection: InitialInspectionStore,
    journal: JournalStore,
    operationProtocol: OperationProtocolStore,
    patient: PatientStore,
    research: ResearchStore,
  })
  .actions((self) => ({
    load: flow(function* (orgId: string, cardId: string) {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getMedicalRecords(orgId, cardId))

        if (error) {
          self.error = error
        } else {
          const normalizedRecords = normalizeRecords(data)

          Object.keys(normalizedRecords).forEach((key) => {
            self[key].items = normalizedRecords[key]
          })
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    clearError: () => {
      self.error = ""
    },
  }))
  .views((self) => ({
    get recordsList(): RecordList {
      const list: RecordList = {}
      const neededElems = [
        "analysis",
        "consultation",
        "diagnosis",
        "epicrisis",
        "extract",
        "initialInspection",
        "operationProtocol",
        "research",
      ]

      for (const storeKey of Object.keys(self)) {
        if (neededElems.includes(storeKey) && self[storeKey].items.length > 0) {
          list[storeKey] = {
            name: recordsListDictionary[storeKey],
            count: self[storeKey].items.length,
          }
        }
      }

      return list
    },
  }))

export const createRecordsStoreDefault = () =>
  types.optional(RecordsStore, {
    analysis: {},
    consultation: {},
    diagnosis: {},
    epicrisis: {},
    extract: {},
    initialInspection: {},
    journal: {},
    operationProtocol: {},
    patient: {},
    research: {},
  })

const recordsDictionary = {
  Анализ: "analysis",
  Консультация: "consultation",
  Диагноз: "diagnosis",
  Эпикриз: "epicrisis",
  Выписка: "extract",
  "Первичный осмотр": "initialInspection",
  Дневник: "journal",
  "Протокол операции": "operationProtocol",
  Пациент: "patient",
  Исследование: "research",
} as const

const recordsListDictionary = {
  analysis: "Результаты анализов",
  consultation: "Консультация",
  diagnosis: "Диагнозы",
  epicrisis: "Эпикризы",
  extract: "Выписки",
  initialInspection: "Первичный осмотр",
  operationProtocol: "Операции",
  research: "Результаты исследований",
} as const

const normalizeRecords = (data: RecordType[]): NormalizedRecords => {
  const result = data.reduce((prev, record) => {
    const docType = record.doc
    const key = recordsDictionary[docType]

    if (prev[key]) {
      prev[key] = [...prev[key], record]
    } else {
      prev[key] = [record]
    }

    return { ...prev }
  }, {})
  return result
}

export interface RecordsStore extends Instance<typeof RecordsStore> {}
