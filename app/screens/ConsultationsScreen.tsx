import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Filter, Screen, Tabs, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { SceneMap } from "react-native-tab-view"
import { COLORS } from "../theme"

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "transparent" }}>
    <Text>FirstRoute</Text>
  </View>
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "transparent" }}>
    <Text>SecondRoute</Text>
  </View>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
})

export const ConsultationsScreen: FC<StackScreenProps<AppStackParamList, "Consultations">> =
  observer(function ConsultationsScreen() {
    const [routes] = React.useState([
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
    ])

    return (
      <Screen style={$root} preset="scroll" filled>
        <Filter preset="filled" />
        <Tabs renderScene={renderScene} routes={routes} />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
