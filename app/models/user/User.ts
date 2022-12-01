import { flow, Instance, SnapshotIn, SnapshotOut, types, toGenerator } from "mobx-state-tree"
import { getUserInfo } from "../../services/passbase"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const UserModel = types
  .model("User")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({
    getUserInfo: flow(function* (IIN: string) {
      try {
        const info = yield* toGenerator(getUserInfo(IIN))
        console.log("info ---> ")
      } catch (error) {}
    }),
  }))
  .actions((self) => ({
    afterCreate: () => {
      self.getUserInfo("870516450266")
    },
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
