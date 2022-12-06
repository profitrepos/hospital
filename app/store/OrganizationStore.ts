import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { getUserInfo } from "../services/passbase"
import { OrganizationModel } from "./models/organization/Organization"

const OrganizationStore = types
  .model("MedicalCardStore")
  .props({
    organizations: types.optional(types.array(OrganizationModel), []),
    loading: false,
    error: types.maybe(types.string),
    activeOrg: types.safeReference(OrganizationModel),
  })
  .actions((self) => ({
    //TODO: удалить ИИН
    load: flow(function* (iin: string = "870516450266") {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getUserInfo(iin))

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

export const createOrganizationStoreDefault = () => types.optional(OrganizationStore, {})
