import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Button, OtpInput, Screen, Select, Tabs } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"
import { GridMenu } from "../components"
import { SceneMap } from "react-native-tab-view"
import PINCode from "@haskkor/react-native-pincode"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

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

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
const ThirdRoute = () => <View style={{ flex: 1, backgroundColor: "blue" }} />

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
})

export const HomeScreen: FC<StackScreenProps<AppStackScreenProps<"Home">>> = observer(
  function HomeScreen() {
    const [first, setFirst] = useState("")

    const [routes] = React.useState([
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
      { key: "third", title: "Third" },
    ])
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen preset="scroll">
        <View style={$root}>
          <Tabs renderScene={renderScene} routes={routes} />
          <GridMenu list={menuList} />
          <PINCode status="choose" />

          <Select
            data={[]}
            onValueChange={console.log}
            value={{ label: "label", value: 1 }}
            placeholder="placeholder"
          />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
//TODO: сделать компоненты Работа с файловой системой, Пин код и отпечаток
