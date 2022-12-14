import { string } from "mobx-state-tree/dist/internal"
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

export interface RecordInfo {
  error: string
  data: RecordType[]
}

export interface NormalizedRecords
  extends Partial<{
    analysis: Analysis[]
    consultation: Consultation[]
    diagnosis: Diagnosis[]
    epicrisis: Epicrisis[]
    extract: Extract[]
    initialInspection: InitialInspection[]
    journal: Journal[]
    operationProtocol: OperationProtocol[]
    patient: Patient[]
    research: Research[]
  }> {}

export interface JournalListItem extends Pick<Journal, "doc" | "date" | "uid"> {}
