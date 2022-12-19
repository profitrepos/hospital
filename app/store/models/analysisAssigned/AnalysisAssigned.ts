import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const AnalysisAssignedModel = AssignmentModel.named("AnalysisAssigned").props({
  type: types.literal("Aнализы"),
})

export interface AnalysisAssigned extends Instance<typeof AnalysisAssignedModel> {}
