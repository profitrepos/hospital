import { Instance, types } from "mobx-state-tree"
import { ChapterModel } from "../common-models/common-models"

export const InitialInspectionModel = types.model("InitialInspection").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Первичный осмотр"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const InitialInspectionsStore = types.model("InitialInspectionsStore").props({
  items: types.optional(types.array(InitialInspectionModel), []),
})

export interface InitialInspection extends Instance<typeof InitialInspectionModel> {}
