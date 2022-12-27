import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
import { ChapterModel } from "../common-models/common-models"

export const ExtractModel = types.model("Extract").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Выписка"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const ExtractsStore = types
  .model("ExtractsStore")
  .props({
    items: types.optional(types.array(ExtractModel), []),
  })
  .views((self) => ({
    get filteredItems(): Extract[] {
      const { records } = getRootStore(self)
      const { search, untilDate } = records
      return self.items.filter(
        (extract) =>
          extract.doc.toLowerCase().includes(search.toLowerCase()) && extract.timestamp > untilDate,
      )
    },
  }))

export interface Extract extends Instance<typeof ExtractModel> {}
