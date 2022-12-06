import { Instance, types } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const ExtractModel = types.model("Extract").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Выписка"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const ExtractStore = types
  .model("ExtractStore")
  .props({
    items: types.optional(types.array(ExtractModel), []),
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

export interface Extract extends Instance<typeof ExtractModel> {}
