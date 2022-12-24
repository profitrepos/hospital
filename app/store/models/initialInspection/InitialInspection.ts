import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
import { ChapterModel } from "../common-models/common-models"

export const InitialInspectionModel = types.model("InitialInspection").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Первичный осмотр"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const InitialInspectionsStore = types
  .model("InitialInspectionsStore")
  .props({
    items: types.optional(types.array(InitialInspectionModel), []),
  })
  .views((self) => ({
    get filteredItems(): InitialInspection[] {
      const { records } = getRootStore(self)
      const { search } = records
      return self.items.filter((inspection) =>
        inspection.doc.toLowerCase().includes(search.toLowerCase()),
      )
    },
  }))

export interface InitialInspection extends Instance<typeof InitialInspectionModel> {}
