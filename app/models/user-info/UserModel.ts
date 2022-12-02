import { flow, Instance, SnapshotIn, SnapshotOut, types, toGenerator } from "mobx-state-tree"
import { translate } from "../../i18n"
import { getUserInfo } from "../../services/passbase"
import { withSetPropAction } from "../helpers/withSetPropAction"

const OrganizationModel = types
  .model("Organization")
  .props({
    organisationId: types.string,
    organisationName: types.string,
    departmentId: types.identifier,
    departmentName: types.string,
  })
  .actions((self) => ({
    afterCreate: () => {
      console.log("AFTER ---- CREATE ---- ORGANIZATION")
    },
  }))

const InfoModel = types.model("Info").props({
  error: types.optional(types.string, ""),
  data: types.optional(types.array(OrganizationModel), []),
})

export const UserModel = types
  .model("User")
  .props({
    iin: types.optional(types.string, ""),
    phone: types.optional(types.string, ""),
    info: types.maybeNull(InfoModel),
    selectedOrganization: types.maybeNull(types.reference(OrganizationModel)),
    error: types.maybeNull(types.string),
    loading: false,
  })
  .actions(withSetPropAction)
  .views((self) => ({
    organization: () => {
      return self.info?.data
    },
  }))
  .actions((self) => ({
    setInfo: (info: Info) => {
      self.info = info
    },
    setActiveOrganization: (org: Organization) => {
      self.selectedOrganization = org
    },
    setIIN: (iin: string) => {
      self.iin = iin
    },
    setPhone: (phone: string) => {
      self.phone = phone
    },
    setError: (err: string) => {
      self.error = err
    },
  }))
  .actions((self) => ({
    getUserInfo: flow(function* () {
      try {
        self.loading = true
        const info = yield* toGenerator(getUserInfo(self.iin))
        self.info = info
        self.setActiveOrganization(info.data[0])
      } catch (error) {
        self.error = translate("errors.network")
      } finally {
        self.loading = false
      }
    }),
  }))
  .actions((self) => ({
    afterCreate: () => {
      console.log("AFTER ---- CREATE ---- USER ---- MODEL")

      self.getUserInfo()
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface Organization extends Instance<typeof OrganizationModel> {}
export interface Info extends Instance<typeof InfoModel> {}

export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () =>
  types.optional(UserModel, {
    iin: "870516450266",
  })
