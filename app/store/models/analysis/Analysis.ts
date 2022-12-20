import { Instance, types } from "mobx-state-tree"
import { IndicatorModel } from "../common-models/common-models"

export const AnalysisModel = types.model("Analysis").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Анализ"),
  date: types.string,
  author: types.string,
  code: types.string,
  name: types.string,
  status: types.string,
  indicators: types.array(IndicatorModel),
})

export const AnalyzesStore = types.model("AnalyzesStore").props({
  items: types.optional(types.array(AnalysisModel), []),
})

export interface Analysis extends Instance<typeof AnalysisModel> {}
