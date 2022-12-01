import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen } from "../components/ui"
import { TabStackParamList } from "../navigators"

export const PagerScreen: FC<StackScreenProps<TabStackParamList, "Pager">> = observer(
  function OtpScreen({ navigation }) {
    return <Screen style={$root} preset="scroll"></Screen>
  },
)

const $root: ViewStyle = {
  flex: 1,
}
