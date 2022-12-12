import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { SelectPatientScreen } from "../screens/SelectPatientScreen"
import { HomeTabNavigator } from "./HomeTabNavigator"
import { MedicalCardNavigator } from "./MedicalCardNavigator"

export type MainStackParamList = {
  Home: undefined
  MedicalCard: undefined
  SelectPatient: undefined
}

const Stack = createNativeStackNavigator<MainStackParamList>()

const screenOptions: NativeStackNavigationOptions = { headerShown: false }
const medCardScreenOptions: NativeStackNavigationOptions = {
  presentation: "transparentModal",
}

const SelectPatientOptions: NativeStackNavigationOptions = {
  presentation: "containedModal",
}

export const MainStack = observer(function MainStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen
        name="MedicalCard"
        component={MedicalCardNavigator}
        options={medCardScreenOptions}
      />
      <Stack.Screen
        name="SelectPatient"
        component={SelectPatientScreen}
        options={SelectPatientOptions}
      />
    </Stack.Navigator>
  )
})
