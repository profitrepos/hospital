import { Instance, types } from "mobx-state-tree"

export const PatientModel = types.model("Patient").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Пациент"),
  patient: types.string,
  gender: types.string,
  IIN: types.string,
  birthdDate: types.string,
  age: types.string,
  address: types.string,
  allergy: types.string,
})

export const PatientStore = types
  .model("PatientStore")
  .props({
    items: types.optional(types.array(PatientModel), []),
    filter: "",
    search: "",
  })
  .actions((self) => ({
    setFilter: (value: string) => {
      self.filter = value
    },
    setSearch: (value: string) => {
      self.search = value
    },
  }))
  .views((self) => ({
    get items() {
      //TODO: сделать логику фильтрации и поиска
      return self.items
    },
  }))

export interface Patient extends Instance<typeof PatientModel> {}
