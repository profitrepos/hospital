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
  MedRecordsScreen,
  JournalsScreen,
  JournalDetailsScreen,
} from "../screens"
import { COLORS } from "../theme"
import { getActiveRouteName, navigationRef } from "./navigationUtilities"

export type MedicalCardTabsParamList = {
  PatientsData: undefined
  MedRecords: undefined
  Journals: undefined
  JournalDetails: undefined
  Assignments: undefined
  More: undefined
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
  lazy: false,
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
      <Tab.Screen
        name="MedRecords"
        component={MedRecordsScreen}
        options={{
          tabBarIcon: ({ color }) => <PencilSVG color={color} />,
          title: translate("medcardTabs.records"),
        }}
      />
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
    </Tab.Navigator>
  )
})

const $sceneContainerStyle: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
}
