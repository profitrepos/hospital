import { Instance, types } from "mobx-state-tree"

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
})

export const DiagnosisStore = types.model("DiagnosisStore").props({
  items: types.optional(types.array(DiagnosisModel), []),
})

export interface Diagnosis extends Instance<typeof DiagnosisModel> {}
