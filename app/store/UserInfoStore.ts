import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { getUserInfo } from "../services/passbase"
import { getRootStore } from "./helpers/getRootStore"
import { OrganizationModel } from "./models/organization/Organization"

const UserInfoStore = types
  .model("UserInfoStore")
  .props({
    organizations: types.optional(types.array(OrganizationModel), []),
    loading: false,
    error: types.optional(types.string, ""),
    activeOrg: types.safeReference(OrganizationModel),
  })
  .views((self) => ({
    get IIN(): string {
      const { app } = getRootStore(self)
      return app.IIN
    },
  }))
  .actions((self) => ({
    load: flow(function* () {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getUserInfo(self.IIN))

        if (error) {
          self.error = error
        } else {
          //TODO: если одна организация устанавливать как активную
          self.organizations = cast(data)
        }
      } catch (error) {
        console.log("UserInfoStore load error ---> ", error)
        // self.error = "errors.network"
        self.error = error
      } finally {
        self.loading = false
      }
    }),
    setActiveOrg: (departmentId: string) => {
      self.activeOrg = departmentId as any
    },
    clearError: () => {
      self.error = ""
    },
  }))

export const createUserInfoStoreDefault = () => types.optional(UserInfoStore, {})
