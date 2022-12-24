import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { DataSVG, JournalSVG, MoreSVG, PencilSVG, СapsuleSVG } from "../components/svg"
import { Text } from "../components/ui"
import { useTranslate } from "../i18n"
import {
  AssignmentsScreen,
  PatientsDataScreen,
  MoreScreen,
  RecordsScreen,
  JournalsScreen,
  JournalDetailsScreen,
  AnalysisRecordsScreen,
  ConsultationRecordsScreen,
  DiagnosisRecordsScreen,
  EpicrisisRecordsScreen,
  ExtractRecordsScreen,
  InitialInspectionRecordsScreen,
  OperationProtocolRecordsScreen,
  ResearchRecordsScreen,
  SubstantiationRecordsScreen,
  MedicinesAndMixturesScreen,
  AnalyzesAssignedScreen,
  ResearhAssignedScreen,
  ConsultationsAssignedScreen,
  RegimesScreen,
  ProceduresScreen,
  DietsScreen,
} from "../screens"
import { COLORS } from "../theme"
import { getActiveRouteName, navigationRef } from "./navigationUtilities"

export type MedicalCardTabsParamList = {
  PatientsData: undefined
  Records: undefined
  Journals: undefined
  JournalDetails: undefined
  Assignments: undefined
  More: undefined
  AnalysisRecords: undefined
  ConsultationRecords: undefined
  DiagnosisRecords: undefined
  EpicrisisRecords: undefined
  ExtractRecords: undefined
  InitialInspectionRecords: undefined
  OperationProtocolRecords: undefined
  ResearchRecords: undefined
  SubstantiationRecords: undefined
  MedicinesAndMixtures: undefined
  AnalyzesAssigned: undefined
  ResearhAssigned: undefined
  ConsultationsAssigned: undefined
  Regimes: undefined
  Diets: undefined
  Procedures: undefined
}

const Tab = createBottomTabNavigator<MedicalCardTabsParamList>()

const defaultTabOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: COLORS.mainBlue,
  tabBarInactiveTintColor: COLORS.lightGrayTabIcon,
  tabBarLabelStyle: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 10,
  },
  tabBarStyle: {
    paddingBottom: 3,
  },
  headerShown: false,
  lazy: true,
}

const hiddenTabOptions: BottomTabNavigationOptions = {
  tabBarItemStyle: {
    display: "none",
  },
}

const jourlnalScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => {
    const routName: string = getActiveRouteName(navigationRef.getRootState())
    const color = routName.includes("Journal") ? COLORS.mainBlue : COLORS.lightGrayTabIcon
    return <JournalSVG color={color} />
  },
  tabBarLabel: () => {
    const routName: string = getActiveRouteName(navigationRef.getRootState())
    const $style: TextStyle = {
      fontSize: 10,
      lineHeight: 13,
      color: routName.includes("Journal") ? COLORS.mainBlue : COLORS.lightGrayTabIcon,
      fontFamily: "Gilroy-SemiBold",
    }
    return <Text style={$style} tx="medcardTabs.journal" />
  },
}
const recordsScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => {
    const routName: string = getActiveRouteName(navigationRef.getRootState())
    const color = routName.includes("Records") ? COLORS.mainBlue : COLORS.lightGrayTabIcon
    return <PencilSVG color={color} />
  },
  tabBarLabel: () => {
    const routName: string = getActiveRouteName(navigationRef.getRootState())
    const $style: TextStyle = {
      fontSize: 10,
      lineHeight: 13,
      color: routName.includes("Records") ? COLORS.mainBlue : COLORS.lightGrayTabIcon,
      fontFamily: "Gilroy-SemiBold",
    }
    return <Text style={$style} tx="medcardTabs.records" />
  },
}

export const MedicalCardNavigator = observer(() => {
  const translate = useTranslate()

  return (
    <Tab.Navigator
      screenOptions={defaultTabOptions}
      backBehavior="history"
      sceneContainerStyle={$sceneContainerStyle}
    >
      <Tab.Screen
        name="PatientsData"
        component={PatientsDataScreen}
        options={{
          tabBarIcon: ({ color }) => <DataSVG color={color} />,
          title: translate("medcardTabs.data"),
        }}
      />
      <Tab.Screen name="Records" component={RecordsScreen} options={recordsScreenOptions} />
      <Tab.Screen name="Journals" component={JournalsScreen} options={jourlnalScreenOptions} />
      <Tab.Screen
        name="Assignments"
        component={AssignmentsScreen}
        options={{
          tabBarIcon: ({ color }) => <СapsuleSVG color={color} />,
          title: translate("medcardTabs.assignments"),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color }) => <MoreSVG color={color} />,
          title: translate("medcardTabs.more"),
        }}
      />
      <Tab.Screen
        name="JournalDetails"
        component={JournalDetailsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="AnalysisRecords"
        component={AnalysisRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="ConsultationRecords"
        component={ConsultationRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="DiagnosisRecords"
        component={DiagnosisRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="EpicrisisRecords"
        component={EpicrisisRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="ExtractRecords"
        component={ExtractRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="InitialInspectionRecords"
        component={InitialInspectionRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="OperationProtocolRecords"
        component={OperationProtocolRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="ResearchRecords"
        component={ResearchRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="SubstantiationRecords"
        component={SubstantiationRecordsScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="MedicinesAndMixtures"
        component={MedicinesAndMixturesScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="AnalyzesAssigned"
        component={AnalyzesAssignedScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="ResearhAssigned"
        component={ResearhAssignedScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen
        name="ConsultationsAssigned"
        component={ConsultationsAssignedScreen}
        options={hiddenTabOptions}
      />
      <Tab.Screen name="Regimes" component={RegimesScreen} options={hiddenTabOptions} />
      <Tab.Screen name="Procedures" component={ProceduresScreen} options={hiddenTabOptions} />
      <Tab.Screen name="Diets" component={DietsScreen} options={hiddenTabOptions} />
    </Tab.Navigator>
  )
})

const $sceneContainerStyle: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
}
