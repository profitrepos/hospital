import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const menuList: IHomeMenuItem[] = [
  {
    title: "Пациенты",
    icon: PatientsSVG,
    navigateTo: "Patients",
  },
  {
    title: "Консультации",
    icon: ConsultaionsSVG,
    navigateTo: "Consultations",
  },
  {
    title: "Приемный покой",
    icon: EmergencyRoomSVG,
    navigateTo: "EmergencyRoom",
  },
  {
    title: "Настройки",
    icon: EmergencyRoomSVG,
    navigateTo: "Settings",
  },
]

export const HomeScreen: FC<StackScreenProps<AppStackScreenProps<"Home">>> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <Text tx="common.ok" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
