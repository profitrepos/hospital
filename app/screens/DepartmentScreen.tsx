import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Screen, ScreenTitle } from "../components/ui"
import { HomeTabParamList } from "../navigators"
import { spacing } from "../theme"
import { MedcardList } from "../components"
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
          <Avatar />
          <ScreenTitle text="departmentScreen.title" />
        </View>
        <View style={[$list, $container]}>
          <MedcardList data={all} onSearchChange={onSearchChange} searchText={allSearch} />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const $container = {
  marginHorizontal: spacing.medium,
}

const $list: ViewStyle = {
  flex: 1,
  marginBottom: spacing.large,
  justifyContent: "flex-end",
}
