import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen } from "../components/ui"
import { MedicalCardsStackParamList } from "../navigators"

export const PatientsDataScreen: FC<StackScreenProps<MedicalCardsStackParamList, "PatientsData">> = observer(
  function PatientsDataScreen({ navigation }) {
    return <Screen style={$root} preset="scroll"></Screen>
  },
)

const $root: ViewStyle = {
  flex: 1,
}
