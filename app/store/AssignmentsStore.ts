import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { AssignmentMenu, AssignmentsForDay, NormalizedAssignments } from "../interfaces"
import { getMedicalAssignments } from "../services/passbase"
import { AnalyzesAssignedStore } from "./models/analysisAssigned/AnalysisAssigned"
import { ConsultationsAssignedStore } from "./models/consultationAssigned/ConsultationAssigned"
import { DietsStore } from "./models/diet/Diet"
import { MedicinesAndMixturesStore } from "./models/medicineAndMixture/medicineAndMixture"
import { ProceduresStore } from "./models/procedure/Procedure"
import { RegimesStore } from "./models/regime/Regime"
import { ResearchAssignedStore } from "./models/researchAssigned/ResearchAssigned"

export const AssignmentsStore = types
  .model("AssignmentsStore")
  .props({
    analyzesAssigned: AnalyzesAssignedStore,
    consultationsAssigned: ConsultationsAssignedStore,
    diets: DietsStore,
    medicinesAndMixtures: MedicinesAndMixturesStore,
    procedures: ProceduresStore,
    regimes: RegimesStore,
    researhAssigned: ResearchAssignedStore,
    loading: false,
    error: types.optional(types.string, ""),
  })
  .actions((self) => ({
    load: flow(function* (orgId: string, cardId: string) {
      try {
        self.error = ""
        self.loading = true

        const { error, data } = yield* toGenerator(getMedicalAssignments(orgId, cardId))

        if (error) {
          self.error = error
        } else {
          const normalizedAssignments = normalizeAssignments(data)

          Object.keys(normalizedAssignments).forEach((key) => {
            self[key].map = cast(normalizedAssignments[key])
          })
        }
      } catch (error) {
        console.log("AssignmentsStore load error ---> ", error)
        // self.error = "errors.network"
        self.error = error
      } finally {
        self.loading = false
      }
    }),
    clearError: () => {
      self.error = ""
    },
  }))
  .views((self) => ({
    get assignmentsMenu() {
      return Object.values(assignmentsDictionary).reduce<AssignmentMenu>((prev, key) => {
        const store = self[key]

        if (store.map.size) {
          prev[key] = {
            name: `assignmentsScreen.${key}`,
            key: key,
          }
        }

        return prev
      }, {})
    },
  }))

export const createAssignmentsStoreDefault = () =>
  types.optional(AssignmentsStore, {
    analyzesAssigned: {},
    consultationsAssigned: {},
    diets: {},
    medicinesAndMixtures: {},
    procedures: {},
    regimes: {},
    researhAssigned: {},
  })

const assignmentsDictionary = {
  Анализы: "analyzesAssigned",
  Консультации: "consultationsAssigned",
  Диета: "diets",
  Медикаменты: "medicinesAndMixtures",
  Смеси: "medicinesAndMixtures",
  Процедуры: "procedures",
  Режим: "regimes",
  Исследования: "researhAssigned",
} as const

const normalizeAssignments = (data: AssignmentsForDay[]): NormalizedAssignments => {
  const result = {}

  for (const day of data) {
    const { timestamp, assignments } = day

    for (const assignment of assignments) {
      const resultKey = assignmentsDictionary[assignment.type]

      const currentMap = result[resultKey]
      if (currentMap) {
        if (currentMap[timestamp]) {
          const prevArr = currentMap[timestamp]
          currentMap[timestamp] = [...prevArr, assignment]
        } else {
          currentMap[timestamp] = [assignment]
        }
      } else {
        result[resultKey] = { [timestamp]: [assignment] }
      }
    }
  }

  return result
}
