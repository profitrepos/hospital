import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"

const ConsultationModel = types
  .model("Consultation")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export const ConsultationsModel = types
  .model("Consultations")
  .props({
    consultation: types.optional(types.array(ConsultationModel), []),
  })
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export interface Consultations extends Instance<typeof ConsultationsModel> {}
export interface ConsultationsSnapshotOut extends SnapshotOut<typeof ConsultationsModel> {}
export interface ConsultationsSnapshotIn extends SnapshotIn<typeof ConsultationsModel> {}
export const createConsultationsDefaultModel = () =>
  types.optional(ConsultationsModel, {
    consultation: [],
  })
