import { TxKeyPath } from "../i18n"
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
    analyzesAssigned: Record<string, AnalysisAssigned>
    consultationsAssigned: Record<string, ConsultationAssigned>
    diets: Record<string, Diet>
    medicines: Record<string, Medicine>
    mixtures: Record<string, Mixture>
    procedures: Record<string, Procedure>
    regimes: Record<string, Regime>
    researhAssigned: Record<string, ResearchAssigned>
  }> {}

interface AssignmentMenuItem {
  name: TxKeyPath
  key: string
}
export interface AssignmentMenu
  extends Partial<Record<keyof NormalizedAssignments, AssignmentMenuItem>> {}
