import { MedicalCardInfo, SearchMedicalCard, SearchPatientsMedicalCard } from "../../interfaces"
import { api } from "../api"

export const getMedicalCards = async (orgId: string, depId: string) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("depId", depId)

  const { data } = await api.apisauce.post<MedicalCardInfo>(
    "getMedicalCards",
    {},
    {
      params,
    },
  )

  return data
}

export const searchMedicalCards = async (
  orgId: string,
  searchRequest: string,
  isClosed: boolean,
) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("searchRequest", searchRequest)
  params.append("isClosed", String(isClosed))

  const { data } = await api.apisauce.post<SearchMedicalCard>(
    "searchMedicalCards",
    {},
    {
      params,
    },
  )

  return data
}

export const getPatientMedicalCards = async (
  orgId: string,
  patientId: string,
  isClosed: boolean,
) => {
  const params = new URLSearchParams()

  params.append("orgId", orgId)
  params.append("patientId", patientId)
  params.append("isClosed ", String(isClosed))

  const { data } = await api.apisauce.post<SearchPatientsMedicalCard>(
    "getPatientMedicalCards",
    {},
    {
      params,
    },
  )

  return data
}
