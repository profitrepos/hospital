import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const ConsultationAssignedModel = AssignmentModel.named("ConsultationAssigned").props({
  type: types.literal("Консультации"),
})

export const ConsultationsAssignedStore = types
  .model("ConsultationsAssignedStore")
  .props({
    map: types.map(types.array(ConsultationAssignedModel)),
    activeConsultation: types.maybeNull(ConsultationAssignedModel),
  })
  .actions((self) => ({
    setActiveConsultation: (consultation: ConsultationAssigned) => {
      self.activeConsultation = { ...consultation }
    },
  }))

export interface ConsultationAssigned extends Instance<typeof ConsultationAssignedModel> {}
