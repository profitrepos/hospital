import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const MedicineModel = AssignmentModel.named("Medicine").props({
  type: types.literal("Медикаменты"),
})

export const MedicinesStore = types.model("MedicinesStore").props({
  map: types.map(types.array(MedicineModel)),
})

export interface Medicine extends Instance<typeof MedicineModel> {}
