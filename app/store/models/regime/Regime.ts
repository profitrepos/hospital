import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const RegimeModel = AssignmentModel.named("Regime").props({
  type: types.literal("Режим"),
})

export const RegimesStore = types.model("RegimesStore").props({
  items: types.optional(types.array(RegimeModel), []),
})

export interface Regime extends Instance<typeof RegimeModel> {}
