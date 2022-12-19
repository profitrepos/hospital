import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const MedicineModel = AssignmentModel.named("Medicine").props({
  type: types.literal("Медикаменты"),
})

export interface Medicine extends Instance<typeof MedicineModel> {}
