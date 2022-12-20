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

export const EpicrisesStore = types.model("EpicrisesStore").props({
  items: types.optional(types.array(EpicrisisModel), []),
})

export interface Epicrisis extends Instance<typeof EpicrisisModel> {}
