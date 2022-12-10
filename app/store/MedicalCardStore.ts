import { cast, flow, getRoot, toGenerator, types } from "mobx-state-tree"
import { MedicalCardListItem } from "../interfaces"
import { getMedicalCards } from "../services/passbase"
import { MedicalCardModel } from "./models/medicalCard/MedicalCard"
import { RootStore } from "./RootStore"

const MedicalCardStore = types
  .model("MedicalCardStore")
  .props({
    medCards: types.optional(types.array(MedicalCardModel), []),
    loading: false,
    error: types.maybe(types.string),
    activeMedCard: types.safeReference(MedicalCardModel),
    allSearch: types.optional(types.string, ""),
    mySearch: types.optional(types.string, ""),
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
    setSearch: (value: string, field: "allSearch" | "mySearch" = "allSearch") => {
      self[field] = value
    },
  }))
  .views((self) => ({
    get all() {
      return self.medCards.reduce<MedicalCardListItem[]>((prev, card) => {
        const values: string[] = Object.values(card)

        if (values.some((v) => v.includes(self.allSearch))) {
          //ФИЛЬТРАЦИЯ ПО ВСЕМ ПОЛЯМ
          const { admissionDate, patient, age, uid } = card
          return [...prev, { admissionDate, patient, age, uid }]
        }

        return prev
      }, [])
    },
    get my() {
      return self.medCards.reduce<MedicalCardListItem[]>((prev, card) => {
        const { userInfo }: RootStore = getRoot(self)

        if (card.doctor !== userInfo.activeOrg.employeeName) {
          return prev
        }

        const values: string[] = Object.values(card)

        if (values.some((v) => v.includes(self.mySearch))) {
          //ФИЛЬТРАЦИЯ ПО ВСЕМ ПОЛЯМ
          const { admissionDate, patient, age, uid } = card
          return [...prev, { admissionDate, patient, age, uid }]
        }

        return prev
      }, [])
    },
  }))

export const createMedicalCardStoreDefault = () => types.optional(MedicalCardStore, {})
