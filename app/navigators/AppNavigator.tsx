import { NavigationContainer } from "@react-navigation/native"
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import Config from "../config"
import { useStores } from "../store"
import {
  AuthScreen,
  OtpScreen,
  VerificationScreen,
  CreatePasswordScreen,
  ResetPasswordScreen,
  SelectOrganizationScreen,
  SettingsScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { MainStack } from "./MainStack"

export type AppStackParamList = {
  Auth: undefined
  Otp: undefined
  CreatePassword: undefined
  Verification: undefined
  Settings: undefined
  ResetPassword: undefined
  SelectOrganization: undefined
  Main: undefined
}

const exitRoutes = Config.exitRoutes

const Stack = createNativeStackNavigator<AppStackParamList>()

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const AppStack = observer(function AppStack() {
  const { isAuth, isVerify } = useStores().app

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isAuth ? (
        isVerify ? (
          <>
            <Stack.Screen name="SelectOrganization" component={SelectOrganizationScreen} />
            <Stack.Screen name="Main" component={MainStack} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
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
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  )
})
