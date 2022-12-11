import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Screen, ScreenTitle } from "../components/ui"
import { HomeTabParamList } from "../navigators"
import { spacing } from "../theme"
import { MedCardsList } from "../components"
import { useStores } from "../store"

export const DepartmentScreen: FC<StackScreenProps<HomeTabParamList, "Department">> = observer(
  function DepartmentScreen({ navigation }) {
    const { all, allSearch, setSearch } = useStores().medicalCard

    const onSearchChange = (value: string) => {
      setSearch(value)
    }

    return (
      <Screen style={$root} preset="fixed" filled>
        <View style={$container}>
          <View style={$header}>
            <BackButton />
            <Avatar />
          </View>
          <ScreenTitle text="departmentScreen.title" />
        </View>
        <View style={[$list, $container]}>
          <MedCardsList data={all} onSearchChange={onSearchChange} searchText={allSearch} />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const $container: ViewStyle = {
  marginHorizontal: spacing.medium,
}
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing.medium,
  marginBottom: spacing.extraSmall,
}
const $list: ViewStyle = {
  flex: 1,
  marginBottom: spacing.large,
  justifyContent: "flex-end",
}
