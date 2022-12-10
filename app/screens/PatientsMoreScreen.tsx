import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardsStackParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"

export const PatientsMoreScreen: FC<StackScreenProps<MedicalCardsStackParamList, "PatientsMore">> = observer(
  function PatientsMoreScreen({ navigation }) {
    return <ScreenWithActionSheet>
    <View>
      <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">Еще</Text>
    </View>
  </ScreenWithActionSheet>
  },
)

const $root: ViewStyle = {
  flex: 1,
}
