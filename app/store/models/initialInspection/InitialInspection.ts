import { Instance, types, cast } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const InitialInspectionModel = types.model("InitialInspection").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Первичный осмотр"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const InitialInspectionStore = types
  .model("InitialInspectionStore")
  .props({
    items: types.optional(types.array(InitialInspectionModel), []),
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
  .views((self) => ({}))

export interface InitialInspection extends Instance<typeof InitialInspectionModel> {}
