import { RecordsInfo } from "../../interfaces"
import { api } from "../api"

export const getMedicalRecords = async (orgId: string, cardId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("cardId", cardId)

  const { data } = await api.apisauce.post<RecordsInfo>(
    "getMedicalRecords",
    {},
    {
      params,
    },
  )

  return data
}
