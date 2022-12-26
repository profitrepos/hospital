import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { MedicalCardListItem } from "../interfaces"
import { getMedicalCards } from "../services/passbase"
import { getRootStore } from "./helpers/getRootStore"
import { MedicalCardModel } from "./models/medicalCard/MedicalCard"

//TODO: Добавить поиск с задержкой на главные экраны
//TODO: Добавить фильтры и поиск на экран с медзаписями

const MedicalCardStore = types
  .model("MedicalCardStore")
  .props({
    medCards: types.optional(types.array(MedicalCardModel), []),
    loading: false,
    error: types.optional(types.string, ""),
    departmentSearch: types.optional(types.string, ""),
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
          console.log("medcard response error ----> ", error)
          self.error = error
        } else {
          self.medCards = cast(data)
        }
      } catch (error) {
        console.log("MedicalCardStore load error ---> ", error)
        // self.error = "errors.network"
        self.error = error
      } finally {
        self.loading = false
      }
    }),
    clearError: () => {
      self.error = ""
    },
    setSearch: (value: string, field: "departmentSearch" | "mySearch" = "departmentSearch") => {
      self[field] = value
    },
  }))
  .views((self) => ({
    get departmentCards() {
      return self.medCards.reduce<MedicalCardListItem[]>((prev, card) => {
        if (card.patient.toLowerCase().includes(self.departmentSearch.toLowerCase())) {
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

        if (card.patient.toLowerCase().includes(self.mySearch.toLowerCase())) {
          const { admissionDate, patient, age, uid } = card
          return [...prev, { admissionDate, patient, age, uid }]
        }

        return prev
      }, [])
    },
  }))

export const createMedicalCardStoreDefault = () => types.optional(MedicalCardStore, {})
