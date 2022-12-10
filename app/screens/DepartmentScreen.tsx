import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Button, Screen, ScreenTitle } from "../components/ui"
import { MainTabStackParamList, MedicalCardsStack, resetRoot } from "../navigators"
import { FilterItem } from "../interfaces/Common"
import { spacing } from "../theme"

const filterData: FilterItem[] = [
  {
    value: "Текущие",
    title: "filter.current",
  },
  {
    value: "Госпитализированные",
    title: "filter.hospitalized",
  },
  {
    value: "Отказ",
    title: "filter.refusal",
  },
]

export const DepartmentScreen: FC<StackScreenProps<MainTabStackParamList, "Department">> =
  observer(function DepartmentScreen({navigation}) {
    const [value, setValue] = useState<FilterItem>()

    const onPress = () => {
      resetRoot()
      navigation.navigate("MedicalCard")
    }


    return (
      <Screen style={$root} preset="fixed" filled>
        <View style={$container}>
          <Avatar />
          <ScreenTitle text="departmentScreen.title" />
        </View>
        {/* <Filter activeItem={value} onChange={setValue} data={filterData} /> */}
        <View style={[$container, $list]}>
          <Button onPress={onPress}>Go To Medicals Card Stack</Button>
        </View>
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $container = {
  marginHorizontal: spacing.medium,
}
const $list: ViewStyle = {
  flex: 1,
  marginBottom: spacing.large,
  justifyContent: "flex-end"
}
