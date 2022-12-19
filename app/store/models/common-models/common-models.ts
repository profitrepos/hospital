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

export const AssignmentModel = types.model("Assignment").props({
  type: types.string,
  code: types.string,
  description: types.string,
  assigned: types.string,
  assignedBy: types.string,
  executed: types.string,
  executedBy: types.string,
  comment: types.string,
})

export interface Chapter extends Instance<typeof ChapterModel> {}
export interface Assignment extends Instance<typeof AssignmentModel> {}
export interface Indicator extends Instance<typeof IndicatorModel> {}
