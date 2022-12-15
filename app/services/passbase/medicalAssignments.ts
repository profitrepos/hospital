import { api } from "../api"

export const getMedicalAssignments = async (orgId: string, cardId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("searchRequest", cardId)

  const { data } = await api.apisauce.post(
    "getMedicalAssignments",
    {},
    {
      params,
    },
  )

  return data
}
