import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
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

export const AnalyzesStore = types
  .model("AnalyzesStore")
  .props({
    items: types.optional(types.array(AnalysisModel), []),
  })
  .views((self) => ({
    get filteredItems(): Analysis[] {
      const { records } = getRootStore(self)
      const { search } = records
      return self.items.filter((analysis) =>
        analysis.doc.toLowerCase().includes(search.toLowerCase()),
      )
    },
  }))

export interface Analysis extends Instance<typeof AnalysisModel> {}
