import { MedicalCard, Patient, PatientMedicalCard } from "../store"

export interface MedicalCardInfo {
  error: ""
  data: MedicalCard[]
}

export interface MedicalCardListItem
  extends Pick<MedicalCard, "patient" | "admissionDate" | "age" | "uid"> {}

export interface PatientListItem
  extends Pick<Patient, "uid" | "patient" | "age"> {}

export interface SearchMedicalCard {
  error: string
  data: {
    patients: Patient[],
    cards: PatientMedicalCard[]
  }
} 

export interface SearchPatientsMedicalCard {
  error: ""
  data: PatientMedicalCard[]
}