import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { JournalDetailScreen, JournalsScreen } from "../screens"

export type JournalsStackParamList = {
  Journals: undefined
  JournalDetail: undefined
}

const Stack = createNativeStackNavigator<JournalsStackParamList>()

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  presentation: "transparentModal",
}

export const JournalsStack = observer(function JournalsStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Journals" component={JournalsScreen} />
      <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
    </Stack.Navigator>
  )
})
