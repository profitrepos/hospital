import { AssignmentsInfo } from "../../interfaces/Assignments"
import { api } from "../api"

export const getMedicalAssignments = async (orgId: string, cardId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("cardId", cardId)

  const { data } = await api.apisauce.post<AssignmentsInfo>(
    "getMedicalAssignments",
    {},
    {
      params,
    },
  )

  return data
}
