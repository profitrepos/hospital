import { MedicalRecords } from "../../interfaces/MedicalRecords"
import { api } from "../api"

export const getMedicalRecords = async (orgId: string, cardId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("cardId", cardId)

  const { data } = await api.apisauce.post<MedicalRecords>("getMedicalRecords", params)

  return data
}
