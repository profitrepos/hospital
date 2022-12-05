import { flow, Instance, SnapshotIn, SnapshotOut, toGenerator, types } from "mobx-state-tree"
import { getUserInfo } from "../services/passbase"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { OrganizationModel } from "./Organization"

const UserInfoModel = types.model("UserInfoModel").props({
  error: types.string,
  data: types.array(OrganizationModel),
})

export const UserModel = types
  .model("User")
  .props({
    loading: false,
    error: types.maybe(types.string),
    phone: types.maybe(types.string),
    iin: types.maybe(types.string),
    organizations: types.maybe(types.array(OrganizationModel)),
    selectedOrganization: types.safeReference(OrganizationModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({
    loadUserInfo: flow(function* (iin: string = "870516450266") {
      //TODO: remove IIN
      try {
        self.loading = true
        self.iin = iin
        const { error, data } = yield* toGenerator(getUserInfo(iin))
        if (error) {
          self.error = error
        } else {
          self.organizations = data
          self.selectedOrganization = data[0].departmentId as any // https://github.com/mobxjs/mobx-state-tree/issues/1282
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setPhone: (phone: string) => {
      self.phone = phone
    },
    setOrganization: (depId: string) => {
      self.selectedOrganization = depId as any // https://github.com/mobxjs/mobx-state-tree/issues/1282
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserInfo extends Instance<typeof UserInfoModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
