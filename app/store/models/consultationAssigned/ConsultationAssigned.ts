import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const ConsultationAssignedModel = AssignmentModel.named("ConsultationAssigned").props({
  type: types.literal("Консультации"),
})

export interface ConsultationAssigned extends Instance<typeof ConsultationAssignedModel> {}
