import { MedicalCardInfo } from "../../interfaces"
import { api } from "../api"

export const getMedicalCards = async (orgId: string, depId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("depId", depId)

  const { data } = await api.apisauce.post<MedicalCardInfo>("getMedicalCards", params)

  return data
}
