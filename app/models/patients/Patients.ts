import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const PatientModel = types
  .model("Patient")
  .props({
    name: types.string,
  })
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({}))

export const PatientsModel = types
  .model("Patients")
  .props({
    patients: types.optional(types.array(PatientModel), []),
    search: "",
    filter: "",
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get patinets() {
      return self.patients.filter((p) => p.name === self.filter && p.name === self.search)
    },
  }))
  .actions((self) => ({}))

export interface Patients extends Instance<typeof PatientsModel> {}
export interface PatientsSnapshotOut extends SnapshotOut<typeof PatientsModel> {}
export interface PatientsSnapshotIn extends SnapshotIn<typeof PatientsModel> {}
export const createPatientsDefaultModel = () =>
  types.optional(PatientsModel, {
    patients: [],
  })
