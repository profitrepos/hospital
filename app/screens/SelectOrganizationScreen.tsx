import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen, ScreenTitle } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { spacing } from "../theme"

export const SelectOrganizationScreen: FC<
  StackScreenProps<AppStackParamList, "SelectOrganization">
> = observer(function OtpScreen({ navigation }) {
  return (
    <Screen style={$root} preset="scroll">
      <ScreenTitle text="selectOrganizationScreen.title" />
      <Button onPress={() => navigation.navigate("Main")}>Next</Button>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  marginTop: spacing.medium,
}
const $select: ViewStyle = {
  flex: 1,
}
