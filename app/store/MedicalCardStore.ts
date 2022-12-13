import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { MedicalCardListItem } from "../interfaces"
import { getMedicalCards } from "../services/passbase"
import { getRootStore } from "./helpers/getRootStore"
import { MedicalCardModel } from "./models/medicalCard/MedicalCard"

const MedicalCardStore = types
  .model("MedicalCardStore")
  .props({
    medCards: types.optional(types.array(MedicalCardModel), []),
    loading: false,
    error: types.optional(types.string, ""),
    activeMedCard: types.safeReference(MedicalCardModel),
    allSearch: types.optional(types.string, ""),
    mySearch: types.optional(types.string, ""),
  })
  .views((self) => ({
    get userName(): string {
      const { userInfo } = getRootStore(self)
      return userInfo.activeOrg.employeeName
    },
  }))
  .actions((self) => ({
    load: flow(function* (orgId: string, depId: string) {
      try {
        self.error = ""
        self.loading = true
        self.medCards = cast([])

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
    setActiveMedCard: (uid: string) => {
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

        if (values.some((v) => String(v).includes(self.allSearch))) {
          //ФИЛЬТРАЦИЯ ПО ВСЕМ ПОЛЯМ
          const { admissionDate, patient, age, uid } = card
          return [...prev, { admissionDate, patient, age, uid }]
        }

        return prev
      }, [])
    },
    get my() {
      return self.medCards.reduce<MedicalCardListItem[]>((prev, card) => {
        if (card.doctor !== self.userName) {
          return prev
        }

        const values: string[] = Object.values(card)

        if (values.some((v) => String(v).includes(self.mySearch))) {
          //ФИЛЬТРАЦИЯ ПО ВСЕМ ПОЛЯМ
          const { admissionDate, patient, age, uid } = card
          return [...prev, { admissionDate, patient, age, uid }]
        }

        return prev
      }, [])
    },
  }))

export const createMedicalCardStoreDefault = () => types.optional(MedicalCardStore, {})
