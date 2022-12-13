import { Instance, types, cast } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const JournalModel = types.model("Journal").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Дневник"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const JournalStore = types
  .model("JournalStore")
  .props({
    items: types.optional(types.array(JournalModel), []),
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

export interface Journal extends Instance<typeof JournalModel> {}
