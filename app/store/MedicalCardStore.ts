import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { getMedicalCards } from "../services/passbase"
import { MedicalCardModel } from "./models/medicalCard/MedicalCard"

const MedicalCardStore = types
  .model("MedicalCardStore")
  .props({
    medCards: types.optional(types.array(MedicalCardModel), []),
    loading: false,
    error: types.maybe(types.string),
    activeMedCard: types.safeReference(MedicalCardModel),
  })
  .actions((self) => ({
    load: flow(function* (orgId: string, depId: string) {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getMedicalCards(orgId, depId))

        if (error) {
          self.error = error
        } else {
          self.medCards = cast(data)
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setActiveOrg: (uid: string) => {
      self.activeMedCard = uid as any
    },
    clearError: () => {
      self.error = ""
    },
  }))

export const createMedicalCardStoreDefault = () => types.optional(MedicalCardStore, {})
