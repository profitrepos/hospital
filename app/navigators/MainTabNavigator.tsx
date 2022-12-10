import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { DepartmentSVG, PatientSVG, PlusSvg } from "../components/svg"
import { useTranslate } from "../i18n"
import { SearchPatientsScreen, DepartmentScreen, MyPatientsScreen } from "../screens"
import { COLORS } from "../theme"

export type MainTabStackParamList = {
  Department: undefined
  MyPatients: undefined
  SearchPatients: undefined
}

interface ScreenOptions extends Record<keyof MainTabStackParamList, {}> {}

const Tab = createBottomTabNavigator<MainTabStackParamList>()

const tabOptions = {
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

export const MainTabNavigator = observer(() => {
  const translate = useTranslate()

  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="Department"
        component={DepartmentScreen}
        options={{
          tabBarIcon: ({ color }) => <DepartmentSVG color={color} />,
          title: translate("mainTabs.department"),
        }}
      />
      <Tab.Screen
        name="MyPatients"
        component={MyPatientsScreen}
        options={{
          tabBarIcon: ({ color }) => <PatientSVG color={color} width={20} height={20} />,
          title: translate("mainTabs.patients"),
        }}
      />
      <Tab.Screen
        name="SearchPatients"
        component={SearchPatientsScreen}
        options={{
          tabBarIcon: ({ color }) => <PlusSvg color={color} />,
          title: translate("mainTabs.all"),
        }}
      />
    </Tab.Navigator>
  )
})
