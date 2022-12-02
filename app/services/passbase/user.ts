import { Info } from "../../models/user-info/UserModel"
import { api } from "../api"

export const getUserInfo = async (IIN: string) => {
  const params = new URLSearchParams()

  params.append("IIN", IIN)

  const { data } = await api.apisauce.get<Info>("getUserInfo", params)

  return data
}
