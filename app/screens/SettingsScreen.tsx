import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"

export const SettingsScreen: FC<StackScreenProps<AppStackParamList, "Settings">> = observer(
  function SettingsScreen() {
    return (
      <Screen style={$root} preset="scroll">
        <Text text="settings" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
