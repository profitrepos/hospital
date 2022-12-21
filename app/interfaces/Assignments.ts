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

export interface NormalizedAssignments
  extends Partial<{
    analyzesAssigned: Map<string, AnalysisAssigned[]>
    consultationsAssigned: Map<string, ConsultationAssigned[]>
    diets: Map<string, Diet[]>
    medicines: Map<string, Medicine[]>
    mixtures: Map<string, Mixture[]>
    procedures: Map<string, Procedure[]>
    regimes: Map<string, Regime[]>
    researhAssigned: Map<string, ResearchAssigned[]>
  }> {}
