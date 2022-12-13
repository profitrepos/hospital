import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"

export const PatientsDataScreen: FC<StackScreenProps<MedicalCardTabsParamList, "PatientsData">> =
  observer(function PatientsDataScreen({ navigation }) {
    const { records } = useStores()
    const { loading, patient, error, clearError } = records

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">
            {JSON.stringify(patient)}
          </Text>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
