import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"
import { SubstantiationModel } from "../substantiation/Substantiation"

export const DiagnosisModel = types.model("Diagnosis").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Диагноз"),
  date: types.string,
  author: types.string,
  code: types.string,
  kind: types.string,
  type: types.string,
  description: types.string,
  substantiation: types.maybe(SubstantiationModel),
})

export const DiagnosesStore = types
  .model("DiagnosesStore")
  .props({
    items: types.optional(types.array(DiagnosisModel), []),
  })
  .views((self) => ({
    get filteredItems(): Diagnosis[] {
      const { records } = getRootStore(self)
      const { search, untilDate } = records
      return self.items.filter(
        (diagnosis) =>
          diagnosis.doc.toLowerCase().includes(search.toLowerCase()) &&
          diagnosis.timestamp > untilDate,
      )
    },
  }))

export interface Diagnosis extends Instance<typeof DiagnosisModel> {}
