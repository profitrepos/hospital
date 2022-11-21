import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"

export const EmergencyRoomScreen: FC<StackScreenProps<AppStackParamList, "EmergencyRoom">> =
  observer(function EmergencyRoomScreen() {
    return (
      <Screen style={$root} preset="scroll">
        <Text text="emergencyRoom" />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
