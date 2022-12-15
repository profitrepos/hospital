import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { PatientData, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const ResearchRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ResearchRecords">
> = observer(function ResearchRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, patient } = records
  const { currentPatient } = patient

  return (
    <ScreenWithActionSheet loading={loading}>
      <View style={$root}>
        <ScreenTitle customText={currentPatient?.patient} />
        {currentPatient && <PatientData patient={currentPatient} />}
      </View>
    </ScreenWithActionSheet>
  )
})

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
