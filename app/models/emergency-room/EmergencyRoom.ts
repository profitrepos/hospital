import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const EmergencyRoomModel = types
  .model("EmergencyRoom")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export interface EmergencyRoom extends Instance<typeof EmergencyRoomModel> {}
export interface EmergencyRoomSnapshotOut extends SnapshotOut<typeof EmergencyRoomModel> {}
export interface EmergencyRoomSnapshotIn extends SnapshotIn<typeof EmergencyRoomModel> {}
export const createEmergencyRoomDefaultModel = () => types.optional(EmergencyRoomModel, {})
