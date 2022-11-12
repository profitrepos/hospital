import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { AppBox, Button, Screen, Text, TextField } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem, MainNavigatorScreenNamesType } from "../interfaces/Common"
import GridMenu from "../components/GridMenu"

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
      <Screen>
        <View style={$root}>
          <Text tx="common.ok" preset="bold" />
          <Text tx="errorScreen.reset" preset="formHelper" />
          <Text tx="common.cancel" preset="heading" />
          <Text tx="common.cancel" preset="subheading" />

          <GridMenu list={menuList} />
          <AppBox>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </AppBox>
          <AppBox>
            <TextField placeholder="Placeholder" value={""} onChangeText={console.log} />
          </AppBox>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
