import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardsStackParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"

export const PatientsJournalScreen: FC<StackScreenProps<MedicalCardsStackParamList, "PatientsJournal">> = observer(
  function PatientsJournalScreen({ navigation }) {
    return <ScreenWithActionSheet>
    <View>
      <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">Дневник</Text>
    </View>
  </ScreenWithActionSheet>
  },
)

