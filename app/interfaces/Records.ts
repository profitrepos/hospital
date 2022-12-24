import {
  Analysis,
  Consultation,
  Diagnosis,
  Epicrisis,
  Extract,
  InitialInspection,
  Journal,
  OperationProtocol,
  Patient,
  Research,
  Substantiation,
} from "../store"

export type RecordType =
  | Analysis
  | Consultation
  | Diagnosis
  | Epicrisis
  | Extract
  | InitialInspection
  | Journal
  | OperationProtocol
  | Patient
  | Research
  | Substantiation

export interface RecordsInfo {
  error: string
  data: RecordType[]
}

export interface NormalizedRecords
  extends Partial<{
    analyzes: Analysis[]
    consultationы: Consultation[]
    diagnosis: Diagnosis[]
    epicrises: Epicrisis[]
    extracts: Extract[]
    initialInspections: InitialInspection[]
    journals: Journal[]
    operationProtocols: OperationProtocol[]
    patients: Patient[]
    research: Research[]
    substantiations: Substantiation[]
  }> {}

export interface RecordMenuItem {
  name: string
  count: number
}

type RecordsMap<T> = {
  [Key in keyof T]: RecordMenuItem
}

export interface RecordMenu extends RecordsMap<Omit<NormalizedRecords, "journals" | "patients">> {}

export interface JournalListItem extends Pick<Journal, "doc" | "date" | "uid"> {}
