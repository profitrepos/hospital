import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { MedicalCardListItem, PatientListItem } from "../interfaces"
import { getPatientMedicalCards, searchMedicalCards } from "../services/passbase"
import { getRootStore } from "./helpers/getRootStore"
import { MedicalCardModel, PatientMedicalCardModel } from "./models/medicalCard/MedicalCard"
import { PatientModel } from "./models/patient/Patient"

const SearchMedicalCardStore = types
  .model("SearchMedicalCardStore")
  .props({
    medCards: types.optional(types.array(PatientMedicalCardModel), []),
    patients: types.optional(types.array(PatientModel), []),
    loading: false,
    error: types.optional(types.string, ""),
    activePatient: types.safeReference(PatientModel),
    searchText: types.optional(types.string, ""),
    onlyActive: true,
  })
  .views((self) => ({
    get activeOrgId(): string {
      const { userInfo } = getRootStore(self)
      return userInfo.activeOrg.organisationId
    },
  }))
  .actions((self) => ({
    searchMedCards: flow(function* () {
      try {
        self.error = ""
        self.loading = true
        self.medCards = cast([])
        self.patients = cast([])

        const { error, data } = yield* toGenerator(
          searchMedicalCards(self.activeOrgId, self.searchText),
        )

        if (error) {
          self.error = error
        } else {
          if (data.patients.length > 1) {
            self.patients = cast(data.patients)
          } else {
            self.medCards = cast(data.cards)
          }
        }
      } catch (error) {
        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    searchByPatient: flow(function* () {
      try {
        self.error = ""
        self.loading = true
        self.medCards = cast([])

        const { error, data } = yield* toGenerator(
          getPatientMedicalCards(self.activeOrgId, self.activePatient.uid),
        )

        if (error) {
          self.error = error
        } else {
          self.medCards = cast(data)
        }
      } catch (error) {
        console.log("ERROR ----- > ", error)

        self.error = "errors.network"
      } finally {
        self.loading = false
      }
    }),
    setActivePatient: (uid: string) => {
      self.activePatient = uid as any
    },
    clearError: () => {
      self.error = ""
    },
    setSearchText: (value: string) => {
      self.searchText = value
    },
    setOnlyActive: (value: boolean) => {
      self.onlyActive = value
    },
  }))
  .views((self) => ({
    get medCardsList() {
      return self.medCards.reduce<MedicalCardListItem[]>((prev, card) => {
        const { admissionDate, patient, age, uid } = card
        //TODO: делать фильтрацию "Текущие / активные"
        return [...prev, { admissionDate, patient, age, uid }]
      }, [])
    },
    get patientsList() {
      return self.patients.reduce<PatientListItem[]>((prev, p) => {
        const { uid, patient, age, address } = p
        return [...prev, { uid, patient, age, address }]
      }, [])
    },
  }))

export const createSearchMedicalCardStoreDefault = () => types.optional(SearchMedicalCardStore, {})
