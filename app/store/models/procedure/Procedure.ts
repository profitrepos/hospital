import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const ProcedureModel = AssignmentModel.named("Procedure").props({
  type: types.literal("Процедуры"),
})

export const ProceduresStore = types
  .model("ProceduresStore")
  .props({
    map: types.map(types.array(ProcedureModel)),
    activeProcedure: types.maybeNull(ProcedureModel),
  })
  .actions((self) => ({
    setActiveProcedure: (procedure: Procedure) => {
      self.activeProcedure = { ...procedure }
    },
  }))

export interface Procedure extends Instance<typeof ProcedureModel> {}
