import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createAppDefaultModel } from "./App"
import { createUserDefaultModel } from "./User"

export const RootStoreModel = types.model("RootStore").props({
  app: createAppDefaultModel(),
  user: createUserDefaultModel(),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
