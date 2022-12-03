import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { ConsultationSVG, HomeSVG, NotificationSVG, PatientSVG } from "../components/svg"
import { useTranslate } from "../i18n"
import { ConsultationsScreen, EmergencyRoomScreen, PagerScreen, PatientsScreen } from "../screens"
import { COLORS } from "../theme"

export type TabStackParamList = {
  EmergencyRoom: undefined
  Patients: undefined
  Consultations: undefined
  Pager: undefined
}

interface ScreenOptions extends Record<keyof TabStackParamList, {}> {}

const Tab = createBottomTabNavigator<TabStackParamList>()

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

export const TabNavigator = observer(() => {
  const translate = useTranslate()

  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="EmergencyRoom"
        component={EmergencyRoomScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeSVG color={color} width={20} height={20} />,
          title: translate("homeMenu.emergencyRoom"),
        }}
      />
      <Tab.Screen
        name="Patients"
        component={PatientsScreen}
        options={{
          tabBarIcon: ({ color }) => <PatientSVG color={color} width={20} height={20} />,
          title: translate("homeMenu.patients"),
        }}
      />
      <Tab.Screen
        name="Consultations"
        component={ConsultationsScreen}
        options={{
          tabBarIcon: ({ color }) => <ConsultationSVG color={color} width={20} height={20} />,
          title: translate("homeMenu.consultations"),
        }}
      />
      <Tab.Screen
        name="Pager"
        component={PagerScreen}
        options={{
          tabBarIcon: ({ color }) => <NotificationSVG color={color} width={20} height={20} />,
          title: translate("homeMenu.pager"),
        }}
      />
    </Tab.Navigator>
  )
})
