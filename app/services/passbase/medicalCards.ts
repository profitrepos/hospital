import { IMedicalCards } from "../../interfaces/MedicalCards"
import { api } from "../api"

export const getMedicalCards = async (orgId: string, depId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("depId", depId)

  const { data } = await api.apisauce.post<IMedicalCards>("getMedicalCards", params)

  return data
}
