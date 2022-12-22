import { flow, Instance, toGenerator, types } from "mobx-state-tree"
import { getMedicalRecords } from "../services/passbase"
import { AnalyzesStore } from "./models/analysis/Analysis"
import { ConsultationsStore } from "./models/consultation/Consultation"
import { ExtractsStore } from "./models/extract/Extract"
import { EpicrisesStore } from "./models/epicrisis/Epicrisis"
import { InitialInspectionsStore } from "./models/initialInspection/InitialInspection"
import { JournalsStore } from "./models/journal/Journal"
import { OperationProtocolsStore } from "./models/operationProtocol/OperationProtocol"
import { PatientsStore } from "./models/patient/Patient"
import { DiagnosesStore } from "./models/diagnosis/Diagnosis"
import { ResearchStore } from "./models/research/Research"
import { NormalizedRecords, RecordList, RecordType } from "../interfaces"
import { SubstantiationsStore } from "./models/substantiation/Substantiation"

const RecordsStore = types
  .model("RecordsStore")
  .props({
    loading: false,
    error: types.optional(types.string, ""),
    analyzes: AnalyzesStore,
    consultations: ConsultationsStore,
    diagnosis: DiagnosesStore,
    epicrises: EpicrisesStore,
    extracts: ExtractsStore,
    initialInspections: InitialInspectionsStore,
    journals: JournalsStore,
    operationProtocols: OperationProtocolsStore,
    patients: PatientsStore,
    research: ResearchStore,
    substantiations: SubstantiationsStore,
    filter: "all", //TODO: сделать фильтр здесь, получать в сторах с записями через getRootStore
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
        console.log("error ---> ", error)
        // self.error = "errors.network"
        self.error = error
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
