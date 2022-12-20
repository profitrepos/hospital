import { Instance, types } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const SubstantiationModel = types.model("Substantiation").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Обоснование диагноза"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const SubstantiationStore = types.model("SubstantiationStore").props({
  items: types.optional(types.array(SubstantiationModel), []),
})

export interface Substantiation extends Instance<typeof SubstantiationModel> {}
