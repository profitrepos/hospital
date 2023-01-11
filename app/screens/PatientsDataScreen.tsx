import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, PatientData, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

const getLastName = (FIO: string) => {
  const [lastName] = FIO.split(" ")
  return lastName
}

export const PatientsDataScreen: FC<StackScreenProps<MedicalCardTabsParamList, "PatientsData">> =
  observer(function PatientsDataScreen({ navigation }) {
    const { records } = useStores()
    const { loading, patients, error, clearError, recordMedCards } = records
    const { currentPatient } = patients
    const { currentMedCard } = recordMedCards

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet handleStyle={$handle} loading={loading}>
        <View style={$root}>
          <ScreenTitle customText={currentPatient?.patient} />
          {currentPatient && currentMedCard && (
            <PatientData medCard={currentMedCard} patient={currentPatient} />
          )}
          {currentPatient && (
            <View style={$archive}>
              <Button
                tx="patientDataScreen.archive"
                txOptions={{ lastName: getLastName(currentPatient.patient), count: 3 }}
              />
            </View>
          )}
        </View>
      </ScreenWithActionSheet>
    )
  })

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingBottom: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
const $handle: ViewStyle = {
  paddingBottom: spacing.extraLarge,
}
const $archive: ViewStyle = {
  padding: spacing.medium,
}
