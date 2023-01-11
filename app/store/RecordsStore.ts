import { flow, Instance, toGenerator, types, cast } from "mobx-state-tree"
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
import { NormalizedRecords, RecordMenu, RecordType } from "../interfaces"
import { SubstantiationsStore } from "./models/substantiation/Substantiation"
import { RecordMedCardsStore } from "./models/recordMedCard/recordMedCard"

const allCategories = [
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
    recordMedCards: RecordMedCardsStore,
    search: "",
    selectedCategories: types.optional(types.array(types.string), allCategories),
    untilDate: types.maybeNull(types.number),
  })
  .actions((self) => ({
    clearError: () => {
      self.error = ""
    },
    setSelectedCategories: (categories: string[]) => {
      self.selectedCategories = cast(categories)
    },
    resetCategoryFilter: () => {
      self.selectedCategories = cast(allCategories)
    },
    setSearch: (text: string) => {
      self.search = text
    },
    setUntilDate: (timestamp: number) => {
      self.untilDate = timestamp
    },
    resetDateFilter: () => {
      self.untilDate = null
    },
  }))
  .views((self) => ({
    get availableCategories(): string[] {
      return allCategories.filter(
        (category) =>
          self[category].filteredItems.length > 0 && self.selectedCategories.includes(category),
      )
    },
    get medCardCategories(): string[] {
      return allCategories.filter((category) => self[category].filteredItems.length > 0)
    },
  }))
  .views((self) => ({
    get recordsMenu(): RecordMenu {
      const list: RecordMenu = {}
      for (const key of self.availableCategories) {
        list[key] = {
          name: `recordsScreen.${key}`,
          count: self[key].filteredItems.length,
        }
      }

      return list
    },
  }))
  .actions((self) => ({
    clearStore: () => {
      self.analyzes = cast({})
      self.consultations = cast({})
      self.diagnosis = cast({})
      self.epicrises = cast({})
      self.extracts = cast({})
      self.initialInspections = cast({})
      self.journals = cast({})
      self.operationProtocols = cast({})
      self.patients = cast({})
      self.research = cast({})
      self.substantiations = cast({})
      self.recordMedCards = cast({})
    },
  }))
  .actions((self) => ({
    load: flow(function* (orgId: string, cardId: string) {
      try {
        self.clearError()
        self.resetCategoryFilter()
        self.resetDateFilter()
        self.clearStore()
        self.loading = true

        const { error, data } = yield* toGenerator(getMedicalRecords(orgId, cardId))

        if (error) {
          console.log("records response error ----> ", error)

          self.error = error
        } else {
          const normalizedRecords = normalizeRecords(data)

          Object.keys(normalizedRecords).forEach((key) => {
            if (self[key]) {
              self[key].items = normalizedRecords[key]
            }
          })
        }
      } catch (error) {
        console.log("RecordsStore load error ---> ", error)
        // self.error = "errors.network"
        self.error = error
      } finally {
        self.loading = false
      }
    }),
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
    recordMedCards: {},
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
  "Медицинская карта": "recordMedCards",
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
