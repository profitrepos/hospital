import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const MedicalCardModel = types.model("MedicalCard").props({
  uid: types.identifier,
  timestamp: types.number,
  patient: types.string,
  gender: types.string,
  age: types.string,
  cardNumber: types.string,
  ward: types.string,
  admissionDate: types.string,
  diagnosis: types.string,
  doctor: types.string,
})

export const PatientMedicalCardModel = MedicalCardModel.named("PatientMedicalCard").props({
  department: types.string,
  isClosed: types.string,
  dischargeDate: types.string
})

export interface MedicalCard extends Instance<typeof MedicalCardModel> {}
export interface PatientMedicalCard extends Instance<typeof PatientMedicalCardModel> {}
export interface MedicalCardSnapshotOut extends SnapshotOut<typeof MedicalCardModel> {}
export interface MedicalCardSnapshotIn extends SnapshotIn<typeof MedicalCardModel> {}
