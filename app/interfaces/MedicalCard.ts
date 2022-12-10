import { MedicalCard } from "../store"

export interface MedicalCardInfo {
  error: ""
  data: MedicalCard[]
}

export interface MedicalCardListItem
  extends Pick<MedicalCard, "patient" | "admissionDate" | "age" | "uid"> {}
