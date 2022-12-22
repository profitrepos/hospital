import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"

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

export const ConsultationsStore = types
  .model("ConsultationsStore")
  .props({
    items: types.optional(types.array(ConsultationModel), []),
  })
  .views((self) => ({
    get filteredItems(): Consultation[] {
      const { records } = getRootStore(self)
      const { search } = records
      return self.items.filter((consultation) => consultation.name.includes(search))
    },
  }))

export interface Consultation extends Instance<typeof ConsultationModel> {}
