import { UserInfo } from "../../interfaces"
import { api } from "../api"

export const getUserInfo = async (IIN: string) => {
  const params = new URLSearchParams()

  params.append("IIN", IIN)

  const { data } = await api.apisauce.get<UserInfo>("getUserInfo", params)

  return data
}
