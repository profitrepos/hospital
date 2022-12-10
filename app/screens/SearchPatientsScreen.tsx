import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Screen, ScreenTitle } from "../components/ui"
import { MainTabStackParamList } from "../navigators"
import { spacing } from "../theme"

export const SearchPatientsScreen: FC<StackScreenProps<MainTabStackParamList, "SearchPatients">> =
  observer(function SearchPatientsScreen() {
    return <Screen style={$root} preset="scroll" filled>
      <View style={$container}>
          <Avatar />
          <ScreenTitle text="searchScreen.title" />
        </View>
    </Screen>
  })

const $root: ViewStyle = {
  flex: 1,
}
const $container = {
  marginHorizontal: spacing.medium,
}