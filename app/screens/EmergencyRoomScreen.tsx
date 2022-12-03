import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Button, Filter, Screen, ScreenTitle, Text } from "../components/ui"
import { TabStackParamList } from "../navigators"
import { FilterItem } from "../interfaces/Common"
import { PatientsList } from "../components"
import { spacing } from "../theme"
import { useStores } from "../models"

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

export const EmergencyRoomScreen: FC<StackScreenProps<TabStackParamList, "EmergencyRoom">> =
  observer(function EmergencyRoomScreen() {
    const { setLocale } = useStores().app
    const [value, setValue] = useState<FilterItem>()

    return (
      <Screen style={$root} preset="fixed" filled>
        <View style={$container}>
          <Avatar />
          <ScreenTitle text="emergencyRoomScreen.title" />
        </View>
        <Button onPress={() => setLocale("ru")}>SET RU</Button>
        <Button onPress={() => setLocale("kz")}>SET KZ</Button>
        <Filter activeItem={value} onChange={setValue} data={filterData} />
        <View style={[$container, $list]}>
          <PatientsList data={[]} />
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
  marginBottom: spacing.extraSmall,
}
