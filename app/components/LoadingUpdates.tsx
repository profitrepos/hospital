import React, { useEffect } from "react"
import { View, ViewStyle } from "react-native"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { useStores } from "../store"
import { spacing } from "../theme"
import { Text, Screen, Preloader } from "./ui"

export const LoadingUpdates = () => {
  const { app } = useStores()
  const { updateApp } = app

  useEffect(() => {
    updateApp()
  }, [])

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Screen>
        <View style={$root}>
          <Text tx="common.updates" />
          <Preloader style={$preloader} />
        </View>
      </Screen>
    </SafeAreaProvider>
  )
}

const $root: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
const $preloader: ViewStyle = {
  flex: 0,
  marginTop: spacing.large,
}
