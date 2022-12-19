import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const DietModel = AssignmentModel.named("Diet").props({
  type: types.literal("Диета"),
})

export interface Diet extends Instance<typeof DietModel> {}
