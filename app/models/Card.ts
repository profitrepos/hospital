import {
  flow,
  getParent,
  Instance,
  SnapshotIn,
  SnapshotOut,
  toGenerator,
  types,
} from "mobx-state-tree"
import { getMedicalRecords } from "../services/passbase"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { RecordModel } from "./Record"

const CardModelInfoModel = types.model("CardModelInfo").props({
  error: types.string,
  data: types.array(RecordModel),
})

export const CardModel = types
  .model("Card")
  .props({
    uid: types.identifier,
    timestamp: types.number,
    patient: types.string,
    cardNumber: types.string,
    ward: types.string,
    admissionDate: types.string,
    diagnosis: types.string,
    doctor: types.string,
    loading: false,
    error: types.maybe(types.string),
    medicalRecords: types.maybe(types.array(RecordModel)),
    selectedRecord: types.safeReference(RecordModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({}))
  .actions((self) => ({
    loadMedicalRecords: flow(function* () {
      try {
        self.loading = true
        const { organisationId } = getParent(self)
        const { error, data } = yield* toGenerator(
          getMedicalRecords(organisationId, self.cardNumber),
        )
        if (error) {
          self.error = error
        } else {
          self.medicalRecords = data
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setSelectedRecord: (id: string) => {
      self.selectedRecord = id as any
    },
  }))

export interface Card extends Instance<typeof CardModel> {}
export interface CardModelInfo extends Instance<typeof CardModelInfoModel> {}
export interface CardSnapshotOut extends SnapshotOut<typeof CardModel> {}
export interface CardSnapshotIn extends SnapshotIn<typeof CardModel> {}
export const createCardDefaultModel = () => types.optional(CardModel, {})
