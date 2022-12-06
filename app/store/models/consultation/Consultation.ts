import { Instance, types } from "mobx-state-tree"

export const ConsultationModel = types.model("Consultation").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Консультация"),
  date: types.string,
  author: types.string,
  code: types.string,
  name: types.string,
  status: types.string,
  description: types.string,
  conclusion: types.string,
})

export const ConsultationStore = types
  .model("ConsultationStore")
  .props({
    items: types.optional(types.array(ConsultationModel), []),
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

export interface Consultation extends Instance<typeof ConsultationModel> {}
