import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Filter, Screen } from "../components/ui"
import { AppStackParamList } from "../navigators"

export const ConsultationsScreen: FC<StackScreenProps<AppStackParamList, "Consultations">> =
  observer(function ConsultationsScreen() {
    return (
      <Screen style={$root} preset="scroll">
        <Filter />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
