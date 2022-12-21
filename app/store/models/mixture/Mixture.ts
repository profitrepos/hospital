import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const MixtureModel = AssignmentModel.named("Mixture").props({
  type: types.literal("Смеси"),
})

export const MixturesStore = types.model("MixturesStore").props({
  map: types.map(types.array(MixtureModel)),
})

export interface Mixture extends Instance<typeof MixtureModel> {}
