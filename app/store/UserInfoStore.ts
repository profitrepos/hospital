import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { getUserInfo } from "../services/passbase"
import { OrganizationModel } from "./models/organization/Organization"

const UserInfoStore = types
  .model("UserInfoStore")
  .props({
    organizations: types.optional(types.array(OrganizationModel), []),
    loading: false,
    error: types.maybe(types.string),
    activeOrg: types.safeReference(OrganizationModel),
    iin: types.optional(types.string, ""),
  })
  .actions((self) => ({
    load: flow(function* () {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getUserInfo(self.iin))

        if (error) {
          self.error = error
        } else {
          self.organizations = cast(data)
        }
      } catch (error) {
        self.error = "errors.network"
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
    setIIN: (value: string) => {
      self.iin = value
    },
  }))

export const createUserInfoStoreDefault = () => types.optional(UserInfoStore, {})
