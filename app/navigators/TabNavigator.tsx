import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"
import React from "react"
import { ConsultationsScreen, EmergencyRoomScreen, PagerScreen, PatientsScreen } from "../screens"

export type TabStackParamList = {
  EmergencyRoom: undefined
  Patients: undefined
  Consultations: undefined
  Pager: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>()

export const TabNavigator = observer(() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EmergencyRoom" component={EmergencyRoomScreen} />
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Consultations" component={ConsultationsScreen} />
      <Tab.Screen name="Pager" component={PagerScreen} />
    </Tab.Navigator>
  )
})
