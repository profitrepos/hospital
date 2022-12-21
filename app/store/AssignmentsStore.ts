import { flow, toGenerator, types } from "mobx-state-tree"
import { AssignmentsForDay, AssignmentType, NormalizedAssignments } from "../interfaces/Assignments"
import { getMedicalAssignments } from "../services/passbase"
import { AnalysisAssigned, AnalyzesAssignedStore } from "./models/analysisAssigned/AnalysisAssigned"
import {
  ConsultationAssigned,
  ConsultationsAssignedStore,
} from "./models/consultationAssigned/ConsultationAssigned"
import { Diet, DietsStore } from "./models/diet/Diet"
import { Medicine, MedicinesStore } from "./models/medicine/Medicine"
import { Mixture, MixturesStore } from "./models/mixture/Mixture"
import { Procedure, ProceduresStore } from "./models/procedure/Procedure"
import { Regime, RegimesStore } from "./models/regime/Regime"
import { ResearchAssigned, ResearchAssignedStore } from "./models/researchAssigned/ResearchAssigned"

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
            self[key].map = normalizedAssignments[key]
          })
        }
      } catch (error) {
        console.log("error ---> ", error)
        self.error = "errors.network"
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
}

const normalizeAssignments = (data: AssignmentsForDay[]): NormalizedAssignments => {
  const result = {
    analyzesAssigned: new Map(),
    consultationsAssigned: new Map(),
    diets: new Map(),
    medicines: new Map(),
    mixtures: new Map(),
    procedures: new Map(),
    regimes: new Map(),
    researhAssigned: new Map(),
  }

  for (const day of data) {
    const { date, assignments } = day

    for (const assignment of assignments) {
      const resultKey = assignmentsDictionary[assignment.type] as keyof typeof result

      const currentMap = result[resultKey] as Map<string, AssignmentType[]>

      if (currentMap.has(date)) {
        const prevArr = currentMap.get(date)
        currentMap.set(date, [...prevArr, assignment])
      } else {
        currentMap.set(date, [assignment])
      }
    }
  }

  return result
}
