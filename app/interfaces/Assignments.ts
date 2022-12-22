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

interface AssignmentsMap<T> {
  [key: string]: T[]
}

export interface NormalizedAssignments
  extends Partial<{
    analyzesAssigned: AssignmentsMap<AnalysisAssigned>
    consultationsAssigned: AssignmentsMap<ConsultationAssigned>
    diets: AssignmentsMap<Diet>
    medicines: AssignmentsMap<Medicine>
    mixtures: AssignmentsMap<Mixture>
    procedures: AssignmentsMap<Procedure>
    regimes: AssignmentsMap<Regime>
    researhAssigned: AssignmentsMap<ResearchAssigned>
  }> {}
