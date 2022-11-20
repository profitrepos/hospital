import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen, Select } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"
import { AppStackParamList } from "../navigators"
import { GridMenu } from "../components/ui/GridMenu"

const menuList: IHomeMenuItem[] = [
  {
    title: "homeMenu.patients",
    icon: PatientsSVG,
    navigateTo: "Patients",
  },
  {
    title: "homeMenu.consultations",
    icon: ConsultaionsSVG,
    navigateTo: "Consultations",
  },
  {
    title: "homeMenu.emergencyRoom",
    icon: EmergencyRoomSVG,
    navigateTo: "EmergencyRoom",
  },
  {
    title: "homeMenu.settings",
    icon: EmergencyRoomSVG,
    navigateTo: "Settings",
  },
]

export const HomeScreen: FC<StackScreenProps<AppStackParamList, "Home">> = observer(
  function HomeScreen() {
    const data = [
      {
        label: "Test item 1",
        value: 1,
      },
      {
        label: "Test item 2",
        value: 2,
      },
    ]
    const [filter, setFilter] = React.useState(null)
    return (
      <Screen preset="scroll">
        <View style={$root}>
          <GridMenu list={menuList} />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

//TODO: сделать минимальный store для навигации
//TODO: refresh control
//посмотреть ворнинг с клипбоардом
