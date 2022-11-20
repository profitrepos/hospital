import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createAppDefaultModel } from "./AppModel"

export const RootStoreModel = types.model("RootStore").props({
  app: createAppDefaultModel(),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
