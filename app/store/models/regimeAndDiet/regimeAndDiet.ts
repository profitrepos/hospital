import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const RegimeAndDietModel = AssignmentModel.named("Regime").props({
  type: types.union(types.literal("Режим"), types.literal("Диета")),
})

export const RegimesAndDietsStore = types.model("MedicinesAndMixturesStore").props({
  map: types.map(types.array(RegimeAndDietModel)),
})

export interface RegimeAndDiet extends Instance<typeof RegimeAndDietModel> {}
export interface Diet extends RegimeAndDiet {
  type: "Диета"
}
export interface Regime extends RegimeAndDiet {
  type: "Режим"
}
