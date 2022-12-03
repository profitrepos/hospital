import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const UserModel = types
  .model("User")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
