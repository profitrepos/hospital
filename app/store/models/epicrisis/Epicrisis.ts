import { Instance, types } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const EpicrisisModel = types.model("Epicrisis").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Эпикриз"),
  date: types.string,
  author: types.string,
  kind: types.string,
  chapters: types.array(ChapterModel),
})

export const EpicrisisStore = types
  .model("EpicrisisStore")
  .props({
    items: types.optional(types.array(EpicrisisModel), []),
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

export interface Epicrisis extends Instance<typeof EpicrisisModel> {}
