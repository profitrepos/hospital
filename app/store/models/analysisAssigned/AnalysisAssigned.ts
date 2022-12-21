import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const AnalysisAssignedModel = AssignmentModel.named("AnalysisAssigned").props({
  type: types.literal("Aнализы"),
})

export const AnalyzesAssignedStore = types.model("AnalyzesAssignedStore").props({
  map: types.map(types.array(AnalysisAssignedModel)),
})

export interface AnalysisAssigned extends Instance<typeof AnalysisAssignedModel> {}
