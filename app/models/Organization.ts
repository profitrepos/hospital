import { flow, Instance, SnapshotIn, SnapshotOut, toGenerator, types } from "mobx-state-tree"
import { getMedicalCards } from "../services/passbase"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { CardModel } from "./Card"

const OrganizationInfoModel = types.model("OrganizationInfo").props({
  error: types.string,
  data: types.array(CardModel),
})

export const OrganizationModel = types
  .model("Organization")
  .props({
    organisationId: types.string,
    organisationName: types.string,
    departmentId: types.identifier,
    departmentName: types.string,
    loading: false,
    error: types.maybe(types.string),
    medicalCards: types.maybe(types.array(CardModel)),
    selectedMedicalCard: types.safeReference(CardModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({
    loadMedicalCards: flow(function* () {
      try {
        self.loading = true
        const { error, data } = yield* toGenerator(
          getMedicalCards(self.organisationId, self.departmentId),
        )
        if (error) {
          self.error = error
        } else {
          self.medicalCards = data
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setSelectedMedicalCard: (id: string) => {
      self.selectedMedicalCard = id as any
    },
  }))
  .actions((self) => ({
    afterCreate: () => {
      self.loadMedicalCards()
      console.log("AFTER CREATE ORGANIZATION ID === ", self.departmentId)
    },
  }))

export interface Organization extends Instance<typeof OrganizationModel> {}
export interface OrganizationInfo extends Instance<typeof OrganizationInfoModel> {}
export interface OrganizationSnapshotOut extends SnapshotOut<typeof OrganizationModel> {}
export interface OrganizationSnapshotIn extends SnapshotIn<typeof OrganizationModel> {}
export const createOrganizationDefaultModel = () => types.optional(OrganizationModel, {})
