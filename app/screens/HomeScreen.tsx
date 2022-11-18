import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"
import { AppStackParamList } from "../navigators"
import { GridMenu } from "../components"

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

//TODO: header с фильтром и селектом - render function ? для каждого экрана
//TODO: сделать минимальный store для навигации
//посмотреть ворнинг с клипбоардом
