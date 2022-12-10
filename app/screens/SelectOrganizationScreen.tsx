import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { BackButton, Button, Preloader, Screen, ScreenTitle, Select } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { useStores } from "../store"
import { spacing } from "../theme"

export const SelectOrganizationScreen: FC<
  StackScreenProps<AppStackParamList, "SelectOrganization">
> = observer(function OtpScreen({ navigation }) {


  return (
    <Screen style={$root} preset="scroll">
      
      <ScreenTitle text="selectOrganizationScreen.title" />

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
