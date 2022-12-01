import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"
import { AppStackParamList } from "../navigators"
import { GridMenu } from "../components/ui/GridMenu"
import { useStores } from "../models"

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
    navigateTo: "ResetPassword",
  },
]

export const HomeScreen: FC<StackScreenProps<AppStackParamList, "Home">> = observer(
  function HomeScreen() {
    const { resetPassword } = useStores().app
    return (
      <Screen preset="scroll">
        <View style={$root}>
          <GridMenu list={menuList} />
          <Button tx="common.exit" onPress={resetPassword}></Button>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
