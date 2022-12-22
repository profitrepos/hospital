import { cast, flow, toGenerator, types } from "mobx-state-tree"
import { AssignmentsForDay, NormalizedAssignments } from "../interfaces/Assignments"
import { getMedicalAssignments } from "../services/passbase"
import { AnalyzesAssignedStore } from "./models/analysisAssigned/AnalysisAssigned"
import { ConsultationsAssignedStore } from "./models/consultationAssigned/ConsultationAssigned"
import { DietsStore } from "./models/diet/Diet"
import { MedicinesStore } from "./models/medicine/Medicine"
import { MixturesStore } from "./models/mixture/Mixture"
import { ProceduresStore } from "./models/procedure/Procedure"
import { RegimesStore } from "./models/regime/Regime"
import { ResearchAssignedStore } from "./models/researchAssigned/ResearchAssigned"

export const AssignmentsStore = types
  .model("AssignmentsStore")
  .props({
    analyzesAssigned: AnalyzesAssignedStore,
    consultationsAssigned: ConsultationsAssignedStore,
    diets: DietsStore,
    medicines: MedicinesStore,
    mixtures: MixturesStore,
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

export const createAssignmentsStoreDefault = () =>
  types.optional(AssignmentsStore, {
    analyzesAssigned: {},
    consultationsAssigned: {},
    diets: {},
    medicines: {},
    mixtures: {},
    procedures: {},
    regimes: {},
    researhAssigned: {},
  })

const assignmentsDictionary = {
  Анализы: "analyzesAssigned",
  Консультации: "consultationsAssigned",
  Диета: "diets",
  Медикаменты: "medicines",
  Смеси: "mixtures",
  Процедуры: "procedures",
  Режим: "regimes",
  Исследования: "researhAssigned",
} as const

const normalizeAssignments = (data: AssignmentsForDay[]): NormalizedAssignments => {
  const result = {}

  for (const day of data) {
    const { date, assignments } = day

    for (const assignment of assignments) {
      const resultKey = assignmentsDictionary[assignment.type]

      const currentMap = result[resultKey]
      if (currentMap) {
        if (currentMap[date]) {
          const prevArr = currentMap[date]
          currentMap[date] = [...prevArr, assignment]
        } else {
          currentMap[date] = [assignment]
        }
      } else {
        result[resultKey] = { [date]: [assignment] }
      }
    }
  }

  return result
}
