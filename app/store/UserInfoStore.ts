import { cast, flow, toGenerator, types, getRoot } from "mobx-state-tree"
import { getUserInfo } from "../services/passbase"
import { OrganizationModel } from "./models/organization/Organization"
import { RootStoreModel } from "./RootStore"

const UserInfoStore = types
  .model("UserInfoStore")
  .props({
    organizations: types.optional(types.array(OrganizationModel), []),
    loading: false,
    error: types.maybe(types.string),
    activeOrg: types.safeReference(OrganizationModel),
  })
  .actions((self) => ({
    load: flow(function* () {
      const { IIN } = getRoot<typeof RootStoreModel>(self).app
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getUserInfo(IIN))

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
  }))

export const createUserInfoStoreDefault = () => types.optional(UserInfoStore, {})
