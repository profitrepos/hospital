import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
import { ChapterModel } from "../common-models/common-models"

export const SubstantiationModel = types.model("Substantiation").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Обоснование диагноза"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const SubstantiationsStore = types
  .model("SubstantiationsStore")
  .props({
    items: types.optional(types.array(SubstantiationModel), []),
  })
  .views((self) => ({
    get filteredItems(): Substantiation[] {
      const { records } = getRootStore(self)
      const { search } = records
      return self.items.filter((substantiation) =>
        substantiation.doc.toLowerCase().includes(search.toLowerCase()),
      )
    },
  }))

export interface Substantiation extends Instance<typeof SubstantiationModel> {}
