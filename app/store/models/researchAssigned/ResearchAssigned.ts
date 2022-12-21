import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const ResearchAssignedModel = AssignmentModel.named("ResearchAssigned").props({
  type: types.literal("Исследования"),
})

export const ResearchAssignedStore = types.model("ResearchAssignedStore").props({
  map: types.map(types.array(ResearchAssignedModel)),
})

export interface ResearchAssigned extends Instance<typeof ResearchAssignedModel> {}
