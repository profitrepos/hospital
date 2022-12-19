import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const ProcedureModel = AssignmentModel.named("Procedure").props({
  type: types.literal("Процедуры"),
})

export interface Procedure extends Instance<typeof ProcedureModel> {}
