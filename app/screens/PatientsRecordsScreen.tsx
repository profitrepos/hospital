import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardsStackParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"

export const PatientsRecordsScreen: FC<StackScreenProps<MedicalCardsStackParamList, "PatientsRecords">> = observer(
  function PatientsRecordsScreen({ navigation }) {
    return <ScreenWithActionSheet>
    <View>
      <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">Мед. записи</Text>
    </View>
  </ScreenWithActionSheet>
  },
)

const $root: ViewStyle = {
  flex: 1,
}
