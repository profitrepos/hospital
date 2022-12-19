import { Instance, types } from "mobx-state-tree"

export const PatientModel = types.model("Patient").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Пациент"),
  patient: types.string,
  gender: types.string,
  IIN: types.string,
  birthDate: types.string,
  age: types.string,
  address: types.string,
  allergy: types.string,
  bloodType: types.string,
})

export const SearchPatientModel = PatientModel.named("SearchPatientModel")

export const PatientStore = types
  .model("PatientStore")
  .props({
    items: types.optional(types.array(PatientModel), []),
  })
  .views((self) => ({
    get currentPatient() {
      if (self.items.length) {
        return self.items[0]
      }
      return undefined
    },
  }))

export interface Patient extends Instance<typeof PatientModel> {}
