import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const DietModel = AssignmentModel.named("Diet").props({
  type: types.literal("Диета"),
})

export const DietsStore = types.model("DietsStore").props({
  map: types.map(types.array(DietModel)),
})

export interface Diet extends Instance<typeof DietModel> {}
