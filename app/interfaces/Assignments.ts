import {
  AnalysisAssigned,
  ConsultationAssigned,
  Diet,
  Medicine,
  Mixture,
  Procedure,
  Regime,
  ResearchAssigned,
} from "../store"

export type AssignmentType =
  | AnalysisAssigned
  | ConsultationAssigned
  | Diet
  | Medicine
  | Mixture
  | Procedure
  | Regime
  | ResearchAssigned

export interface AssignmentsForDay {
  date: string
  timestamp: number
  assignments: AssignmentType[]
}

export interface AssignmentsInfo {
  error: string
  data: AssignmentsForDay[]
}
