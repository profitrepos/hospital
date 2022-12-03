import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

const PatientMode = types.model("Patient").props({
  uid: types.string,
})

export const RecordModel = types
  .model("Record")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export interface Record extends Instance<typeof RecordModel> {}
export interface RecordSnapshotOut extends SnapshotOut<typeof RecordModel> {}
export interface RecordSnapshotIn extends SnapshotIn<typeof RecordModel> {}
