import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Filter, Screen, ScreenTitle, Text } from "../components/ui"
import { TabStackParamList } from "../navigators"
import { FilterItem } from "../interfaces/Common"

const filterData: FilterItem[] = [
  {
    value: "Текущие",
    title: "emergencyRoomFilter.current",
  },
  {
    value: "Госпитализированные",
    title: "emergencyRoomFilter.hospitalized",
  },
  {
    value: "Отказ",
    title: "emergencyRoomFilter.refusal",
  },
]

export const EmergencyRoomScreen: FC<StackScreenProps<TabStackParamList, "EmergencyRoom">> =
  observer(function EmergencyRoomScreen() {
    const [value, setValue] = useState<FilterItem>()

    return (
      <Screen style={$root} preset="scroll" filled>
        <Avatar />
        <ScreenTitle text="emergencyRoomScreen.title" />
        <Filter activeItem={value} onChange={setValue} data={filterData} />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
