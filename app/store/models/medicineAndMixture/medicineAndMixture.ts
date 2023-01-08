import { Instance, types } from "mobx-state-tree"
import { AssignmentModel } from "../common-models/common-models"

export const MedicineAndMixtureModel = AssignmentModel.named("Medicine").props({
  type: types.union(types.literal("Медикаменты"), types.literal("Смеси")),
})

export const MedicinesAndMixturesStore = types
  .model("MedicinesAndMixturesStore")
  .props({
    map: types.map(types.array(MedicineAndMixtureModel)),
    activeMedicineOrMixture: types.maybeNull(MedicineAndMixtureModel),
  })
  .actions((self) => ({
    setActiveMedicineOrMixture: (medicineOrMixture: Mixture | Medicine) => {
      self.activeMedicineOrMixture = { ...medicineOrMixture }
    },
  }))

export interface MedicinesAndMixtures extends Instance<typeof MedicineAndMixtureModel> {}
export interface Medicine extends MedicinesAndMixtures {
  type: "Медикаменты"
}
export interface Mixture extends MedicinesAndMixtures {
  type: "Смеси"
}
