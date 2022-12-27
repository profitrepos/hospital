import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"

export const RecordMedCardModel = types.model("RecordMedCard").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Медицинская карта"),
  cardNumber: types.string,
  department: types.string,
  ward: types.string,
  admissionDate: types.string,
  hospitalization: types.string,
  diagnosis: types.string,
  doctor: types.string,
})

export const RecordMedCardsStore = types
  .model("RecordMedCardsStore")
  .props({
    items: types.optional(types.array(RecordMedCardModel), []),
  })
  .views((self) => ({
    get currentMedCard() {
      if (self.items.length) {
        return self.items[0]
      }
      return undefined
    },
  }))

export interface RecordMedCard extends Instance<typeof RecordMedCardModel> {}
