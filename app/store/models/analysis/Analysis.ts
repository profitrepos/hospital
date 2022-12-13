import { Instance, types, cast } from "mobx-state-tree"
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

export const AnalysisStore = types
  .model("AnalysisStore")
  .props({
    items: types.optional(types.array(AnalysisModel), []),
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

export interface Analysis extends Instance<typeof AnalysisModel> {}
