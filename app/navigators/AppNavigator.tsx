import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import {
  HomeScreen,
  AuthScreen,
  PatientsScreen,
  ConsultationsScreen,
  EmergencyRoomScreen,
  SettingsScreen,
  OtpScreen,
  VerificationScreen,
  CreatePasswordScreen,
  ResetPasswordScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

export type AppStackParamList = {
  Home: undefined
  Auth: undefined
  Patients: undefined
  Consultations: undefined
  EmergencyRoom: undefined
  Settings: undefined
  Otp: undefined
  Verification: undefined
  CreatePassword: undefined
  ResetPassword: undefined
}

const exitRoutes = Config.exitRoutes

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const isAuth = true
  const isVerify = true
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {isAuth ? (
        isVerify ? (
          <>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Patients" component={PatientsScreen} />
            <Stack.Screen name="Consultations" component={ConsultationsScreen} />
            <Stack.Screen name="EmergencyRoom" component={EmergencyRoomScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <Stack.Screen name="Verification" component={VerificationScreen} />
        )
      ) : (
        <>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        </>
      )}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
