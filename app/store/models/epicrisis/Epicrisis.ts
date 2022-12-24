import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
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

export const EpicrisesStore = types
  .model("EpicrisesStore")
  .props({
    items: types.optional(types.array(EpicrisisModel), []),
  })
  .views((self) => ({
    get filteredItems(): Epicrisis[] {
      const { records } = getRootStore(self)
      const { search } = records
      return self.items.filter((epicris) =>
        epicris.doc.toLowerCase().includes(search.toLowerCase()),
      )
    },
  }))

export interface Epicrisis extends Instance<typeof EpicrisisModel> {}
