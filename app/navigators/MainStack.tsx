import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { HomeTabNavigator } from "./HomeTabNavigator"
import { MedicalCardNavigator } from "./MedicalCardNavigator"

export type MainStackParamList = {
  Home: undefined
  MedicalCard: undefined
  SelectPatient: undefined
  Journals: undefined
  JournalDetail: undefined
}

const Stack = createNativeStackNavigator<MainStackParamList>()

const screenOptions: NativeStackNavigationOptions = { headerShown: false, gestureEnabled: false }
const transparentScreenOptions: NativeStackNavigationOptions = {
  presentation: "transparentModal",
}

export const MainStack = observer(function MainStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen
        name="MedicalCard"
        component={MedicalCardNavigator}
        options={transparentScreenOptions}
      />
    </Stack.Navigator>
  )
})
