import { useState, useEffect, useRef } from "react"
import { BackHandler, Platform } from "react-native"
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from "@react-navigation/native"
import Config from "../config"
import type { PersistNavigationConfig } from "../config/config.base"
import { useIsMounted } from "../utils/isMounted"

/* eslint-disable */
export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any
  },
  dispatch(_action: NavigationAction) {},
}
/* eslint-enable */

export const navigationRef = createNavigationContainerRef()

export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>) {
  const route = state.routes[state.index]

  if (!route.state) return route.name

  return getActiveRouteName(route.state)
}

export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  if (Platform.OS === "ios") return

  // The reason we're using a ref here is because we need to be able
  // to update the canExit function without re-setting up all the listeners
  const canExitRef = useRef(canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState())

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        BackHandler.exitApp()
        return true
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
        return true
      }

      return false
    }

    BackHandler.addEventListener("hardwareBackPress", onBackPress)

    return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress)
  }, [])
}

function navigationRestoredDefaultState(persistNavigation: PersistNavigationConfig) {
  if (persistNavigation === "always") return false
  if (persistNavigation === "dev" && __DEV__) return false
  if (persistNavigation === "prod" && !__DEV__) return false

  return true
}

export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState()
  const isMounted = useIsMounted()

  const initNavState = navigationRestoredDefaultState(Config.persistNavigation)
  const [isRestored, setIsRestored] = useState(initNavState)

  const routeNameRef = useRef<string | undefined>()

  const onNavigationStateChange = (state) => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = getActiveRouteName(state)

    if (previousRouteName !== currentRouteName) {
      // track screens.
      if (__DEV__) {
        console.tron.log(currentRouteName)
      }
    }

    routeNameRef.current = currentRouteName

    storage.save(persistenceKey, state)
  }

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey)
      if (state) setInitialNavigationState(state)
    } finally {
      if (isMounted()) setIsRestored(true)
    }
  }

  useEffect(() => {
    if (!isRestored) restoreState()
  }, [isRestored])

  return { onNavigationStateChange, restoreState, isRestored, initialNavigationState }
}

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never)
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function resetRoot(params = { index: 0, routes: [] }) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params)
  }
}

//TODO: удалить не нужные (оставить только для записей)
export const navigateToDictionary = {
  analyzes: "AnalysisRecords",
  consultations: "ConsultationRecords",
  diagnosis: "DiagnosisRecords",
  epicrisis: "EpicrisisRecords",
  extracts: "ExtractRecords",
  initialInspections: "InitialInspectionRecords",
  operationProtocols: "OperationProtocolRecords",
  research: "ResearchRecords",
  substantiations: "SubstantiationRecords",
  analyzesAssigned: "AnalyzesAssigned",
  consultationsAssigned: "ConsultationsAssigned",
  regimesAndDiets: "RegimesAndDietsAssigned",
  medicinesAndMixtures: "MedicinesAndMixturesAssigned",
  procedures: "ProceduresAssigned",
  researhAssigned: "ResearhAssigned",
  analysisDetails: "AnalysisRecordsDetails",
  consultationDetails: "ConsultationRecordsDetails",
  diagnosisDetails: "DiagnosisRecordsDetails",
  epicrisisDetails: "EpicrisisRecordsDetails",
  extractDetails: "ExtractRecordsDetails",
  initialInspectionDetails: "InitialInspectionRecordsDetails",
  researchDetails: "ResearchRecordsDetails",
  substantiationDetails: "SubstantiationRecordsDetails",
  operationProtocolDetails: "OperationProtocolRecordsDetails",
  analysisAssignedDetails: "AnalysisAssignedDetails",
  consultationAssignedDetails: "ConsultationAssignedDetails",
  medicineOrMixtureDetails: "MedicineOrMixtureAssignedDetails",
  procedureDetails: "ProcedureAssignedDetails",
  regimeOrDietAssignedDetails: "RegimeOrDietAssignedDetails",
  researchAssignedDetails: "ResearchAssignedDetails",
} as const
