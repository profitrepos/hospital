import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardsStackParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"

export const PatientsDataScreen: FC<StackScreenProps<MedicalCardsStackParamList, "PatientsData">> = observer(
  function PatientsDataScreen({ navigation }) {
    return <ScreenWithActionSheet>
      <View>
        <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">Данные</Text>
      </View>
    </ScreenWithActionSheet>
  },
)
