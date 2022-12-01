import { ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import type { ApiConfig } from "./api.types"

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  auth: Config.API_AUTHORIZATION,
  timeout: 10000,
}

export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        Authorization: Config.API_AUTHORIZATION,
      },
    })
  }
}

export const api = new Api()
