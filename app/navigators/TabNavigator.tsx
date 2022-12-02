import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { ConsultationSVG, HomeSVG, NotificationSVG, PatientSVG } from "../components/svg"
import { translate } from "../i18n"
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

const screenOptions: ScreenOptions = {
  EmergencyRoom: {
    tabBarIcon: ({ color }) => <HomeSVG color={color} width={20} height={20} />,
    title: translate("homeMenu.emergencyRoom"),
  },
  Patients: {
    tabBarIcon: ({ color }) => <PatientSVG color={color} width={20} height={20} />,
    title: translate("homeMenu.patients"),
  },
  Consultations: {
    tabBarIcon: ({ color }) => <ConsultationSVG color={color} width={20} height={20} />,
    title: translate("homeMenu.consultations"),
  },
  Pager: {
    tabBarIcon: ({ color }) => <NotificationSVG color={color} width={20} height={20} />,
    title: translate("homeMenu.pager"),
  },
}

export const TabNavigator = observer(() => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="EmergencyRoom"
        component={EmergencyRoomScreen}
        options={screenOptions.EmergencyRoom}
      />
      <Tab.Screen name="Patients" component={PatientsScreen} options={screenOptions.Patients} />
      <Tab.Screen
        name="Consultations"
        component={ConsultationsScreen}
        options={screenOptions.Consultations}
      />
      <Tab.Screen name="Pager" component={PagerScreen} options={screenOptions.Pager} />
    </Tab.Navigator>
  )
})
