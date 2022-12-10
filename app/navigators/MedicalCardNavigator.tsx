import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { DataSVG, JournalSVG, MoreSVG, PencilSVG, СapsuleSVG } from "../components/svg"
import { useTranslate } from "../i18n"
import {
  PatientsAssignmentsScreen,
  PatientsDataScreen,
  PatientsJournalScreen,
  PatientsMoreScreen,
  PatientsRecordsScreen,
} from "../screens"
import { COLORS } from "../theme"

export type MedicalCardTabsParamList = {
  PatientsData: undefined
  PatientsRecords: undefined
  PatientsJournal: undefined
  PatientsAssignments: undefined
  PatientsMore: undefined
}

const Tab = createBottomTabNavigator<MedicalCardTabsParamList>()

const tabOptions: BottomTabNavigationOptions = {
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
}

export const MedicalCardNavigator = observer(() => {
  const translate = useTranslate()

  return (
    <Tab.Navigator screenOptions={tabOptions} sceneContainerStyle={$sceneContainerStyle}>
      <Tab.Screen
        name="PatientsData"
        component={PatientsDataScreen}
        options={{
          tabBarIcon: ({ color }) => <DataSVG color={color} />,
          title: translate("medcardTabs.data"),
        }}
      />
      <Tab.Screen
        name="PatientsRecords"
        component={PatientsRecordsScreen}
        options={{
          tabBarIcon: ({ color }) => <PencilSVG color={color} />,
          title: translate("medcardTabs.records"),
        }}
      />
      <Tab.Screen
        name="PatientsJournal"
        component={PatientsJournalScreen}
        options={{
          tabBarIcon: ({ color }) => <JournalSVG color={color} />,
          title: translate("medcardTabs.journal"),
        }}
      />
      <Tab.Screen
        name="PatientsAssignments"
        component={PatientsAssignmentsScreen}
        options={{
          tabBarIcon: ({ color }) => <СapsuleSVG color={color} />,
          title: translate("medcardTabs.assignments"),
        }}
      />
      <Tab.Screen
        name="PatientsMore"
        component={PatientsMoreScreen}
        options={{
          tabBarIcon: ({ color }) => <MoreSVG color={color} />,
          title: translate("medcardTabs.more"),
        }}
      />
    </Tab.Navigator>
  )
})

const $sceneContainerStyle: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
}
