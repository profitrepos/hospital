import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Screen } from "../components/ui"
import { MainStackParamList } from "../navigators"
import { PatientsList, ScreenWithActionSheet } from "../components"
import { PatientListItem } from "../interfaces"
import { useStores } from "../store"
import { spacing } from "../theme"

export const SelectPatientScreen: FC<StackScreenProps<MainStackParamList, "SelectPatient">> =
  observer(function PatientsMoreScreen({ navigation }) {
    const { search } = useStores()
    const { loading, patientsList, setActivePatient } = search

    const patientHandler = (patient: PatientListItem) => {
      setActivePatient(patient.uid)
      navigation.goBack()
    }

    return (
      <Screen preset="fixed">
        <View style={$root}>
          <ScreenTitle text="selectPatientScreen.title" />
          <PatientsList data={patientsList} onPress={patientHandler} loading={loading} />
        </View>
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: spacing.medium,
  borderRadius: 12,
}
