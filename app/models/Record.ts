import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

const ChapterModel = types.model("Chapter").props({
  chapter: types.string,
  text: types.string,
})

const IndicatorModel = types.model("Indicator").props({
  indicator: types.string,
  unit: types.string,
  result: types.string,
})

const BaseRecordModel = types.model("BaseRecord").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.string,
  date: types.string,
  author: types.string,
})

const PatientModel = types.model("Patient").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.string,
  patient: types.string,
  gender: types.string,
  IIN: types.string,
  birthDate: types.string,
  age: types.string,
  address: types.string,
  allergy: types.string,
}) //Пациент
const InitialInspectionModel = BaseRecordModel.named("InitialInspection").props({
  chapters: types.array(ChapterModel),
}) // Первичный осмотр
const JournalModel = BaseRecordModel.named("Journal").props({
  chapters: types.array(ChapterModel),
}) // Дневник
const EpicrisisModel = BaseRecordModel.named("Epicrisis").props({
  kind: types.string,
  chapters: types.array(ChapterModel),
}) // Эпикриз
const ExtractModel = BaseRecordModel.named("Extract").props({
  chapters: types.array(ChapterModel),
}) //Выписка
const OperationProtocolModel = BaseRecordModel.named("OperationProtocol").props({
  code: types.string,
  protocol: types.string,
}) // Протокол операции

const DiagnosisModel = BaseRecordModel.named("Diagnosis").props({
  code: types.string,
  kind: types.string,
  type: types.string,
  description: types.string,
}) //Диагноз

const AnalysisModel = BaseRecordModel.named("Analysis").props({
  code: types.string,
  name: types.string,
  status: types.string,
  indicators: types.array(IndicatorModel),
}) // Анализ

const ResearchModel = BaseRecordModel.named("Research").props({
  code: types.string,
  name: types.string,
  status: types.string,
  description: types.string,
  conclusion: types.string,
}) //Иследование

const ConsultationModel = ResearchModel.named("Consultation") // Консультация

const SimpleRecordModel = types.compose(
  "SimpleRecordModel",
  InitialInspectionModel,
  JournalModel,
  EpicrisisModel,
  ExtractModel,
  OperationProtocolModel,
  DiagnosisModel,
  AnalysisModel,
  ResearchModel,
  ConsultationModel,
)

export const RecordModel = types.compose("RecordModel", SimpleRecordModel, PatientModel)

export interface Consultation extends Instance<typeof ConsultationModel> {}
export interface Research extends Instance<typeof ResearchModel> {}
export interface Analysis extends Instance<typeof AnalysisModel> {}
export interface Diagnosis extends Instance<typeof DiagnosisModel> {}
export interface OperationProtocol extends Instance<typeof OperationProtocolModel> {}
export interface Extract extends Instance<typeof ExtractModel> {}
export interface Epicrisis extends Instance<typeof EpicrisisModel> {}
export interface Journal extends Instance<typeof JournalModel> {}
export interface InitialInspection extends Instance<typeof InitialInspectionModel> {}
export interface Patient extends Instance<typeof PatientModel> {}
export interface Record extends Instance<typeof RecordModel> {}
export interface RecordSnapshotOut extends SnapshotOut<typeof RecordModel> {}
export interface RecordSnapshotIn extends SnapshotIn<typeof RecordModel> {}
