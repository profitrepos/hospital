import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { getMedicalRecords } from "../services/passbase"
import { AnalysisModel, AnalysisStore } from "./models/analysis/Analysis"
import { ConsultationModel, ConsultationStore } from "./models/consultation/Consultation"
import { ExtractModel, ExtractStore } from "./models/extract/Extract"
import { EpicrisisModel, EpicrisisStore } from "./models/epicrisis/Epicrisis"
import {
  InitialInspectionModel,
  InitialInspectionStore,
} from "./models/initialInspection/InitialInspection"
import { JournalModel, JournalStore } from "./models/journal/Journal"
import {
  OperationProtocolModel,
  OperationProtocolStore,
} from "./models/operationProtocol/OperationProtocol"
import { PatientModel, PatientStore } from "./models/patient/Patient"
import { DiagnosisModel, DiagnosisStore } from "./models/diagnosis/Diagnosis"
import { ResearchModel, ResearchStore } from "./models/research/Research"
import { NormalizedRecords, RecordType } from "../interfaces"

const ComposeRecordModel = types.union(
  AnalysisModel,
  ConsultationModel,
  DiagnosisModel,
  EpicrisisModel,
  ExtractModel,
  InitialInspectionModel,
  JournalModel,
  OperationProtocolModel,
  PatientModel,
  ResearchModel,
)

const RecordStore = types
  .model("RecordStore")
  .props({
    loading: false,
    error: types.maybe(types.string),
    activeRecord: types.safeReference(ComposeRecordModel),
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
    //TODO: удалить ИИН
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
            self[key] = normalizeRecords[key]
          })
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setActiveRecord: (uid: string) => {
      self.activeRecord = uid as any
    },
    clearError: () => {
      self.error = ""
    },
  }))

export const createRecordStoreDefault = () => types.optional(RecordStore, {
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
