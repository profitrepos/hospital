import { Instance, types } from "mobx-state-tree"

export const ChapterModel = types.model("Chapter").props({
  chapter: types.string,
  text: types.string,
})

export const IndicatorModel = types.model("Indicator").props({
  indicator: types.string,
  unit: types.string,
  result: types.string,
})

export interface Chapter extends Instance<typeof ChapterModel> {}
export interface Indicator extends Instance<typeof IndicatorModel> {}
