import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"

export const ResearchModel = types.model("Research").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Исследование"),
  date: types.string,
  author: types.string,
  code: types.string,
  name: types.string,
  status: types.string,
  description: types.string,
  conclusion: types.string,
})

export const ResearchStore = types
  .model("ResearchStore")
  .props({
    items: types.optional(types.array(ResearchModel), []),
  })
  .views((self) => ({
    get filteredItems(): Research[] {
      const { records } = getRootStore(self)
      const { search, untilDate } = records
      return self.items.filter(
        (research) =>
          research.doc.toLowerCase().includes(search.toLowerCase()) &&
          research.timestamp > untilDate,
      )
    },
  }))

export interface Research extends Instance<typeof ResearchModel> {}
