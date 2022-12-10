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
}

const Stack = createNativeStackNavigator<MainStackParamList>()

const screenOptions: NativeStackNavigationOptions = { headerShown: false }
const medCardScreenOptions: NativeStackNavigationOptions = {
  presentation: "transparentModal",
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
    </Stack.Navigator>
  )
})
