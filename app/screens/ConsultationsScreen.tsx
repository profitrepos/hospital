import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen } from "../components/ui"
import { TabStackParamList } from "../navigators"

export const ConsultationsScreen: FC<StackScreenProps<TabStackParamList, "Consultations">> =
  observer(function ConsultationsScreen() {
    return <Screen style={$root} preset="scroll" filled></Screen>
  })

const $root: ViewStyle = {
  flex: 1,
}
