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
import { SubstantiationStore } from "./models/substantiation/Substantiation"

const RecordsStore = types
  .model("RecordsStore")
  .props({
    loading: false,
    error: types.optional(types.string, ""),
    analyzes: AnalysisStore,
    consultations: ConsultationStore,
    diagnosis: DiagnosisStore,
    epicrises: EpicrisisStore,
    extracts: ExtractStore,
    initialInspections: InitialInspectionStore,
    journals: JournalStore,
    operationProtocols: OperationProtocolStore,
    patients: PatientStore,
    research: ResearchStore,
    substantiations: SubstantiationStore,
    filter: "all", //TODO: сделать фильтр здесь, получать в сторах через getRootStore
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
        console.log("ERROR --- ", error)
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
        "analyzes",
        "consultations",
        "diagnosis",
        "epicrises",
        "extracts",
        "initialInspections",
        "operationProtocols",
        "research",
        "substantiations",
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
    analyzes: {},
    consultations: {},
    diagnosis: {},
    epicrises: {},
    extracts: {},
    initialInspections: {},
    journals: {},
    operationProtocols: {},
    patients: {},
    research: {},
    substantiations: {},
  })

const recordsDictionary = {
  Анализ: "analyzes",
  Консультация: "consultations",
  Диагноз: "diagnosis",
  Эпикриз: "epicrises",
  Выписка: "extracts",
  "Первичный осмотр": "initialInspections",
  Дневник: "journals",
  "Протокол операции": "operationProtocols",
  Пациент: "patients",
  Исследование: "research",
  "Обоснование диагноза": "substantiations",
} as const

const recordsListDictionary = {
  analyzes: "Результаты анализов",
  consultations: "Консультация",
  diagnosis: "Диагнозы",
  epicrises: "Эпикризы",
  extracts: "Выписки",
  initialInspections: "Первичный осмотр",
  operationProtocols: "Операции",
  research: "Результаты исследований",
  substantiations: "Обоснования диагнозов",
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
