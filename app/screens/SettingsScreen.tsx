import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { spacing } from "../theme"
import { useStores } from "../store"

export const SettingsScreen: FC<StackScreenProps<AppStackParamList, "Settings">> = observer(
  function SettingsScreen() {
    const { app } = useStores()

    const { resetPassword } = app

    return (
      <Screen style={$root} preset="scroll">
        <Button onPress={resetPassword}>Выйти</Button>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  marginTop: spacing.large,
}
