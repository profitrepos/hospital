import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"

export const AssignmentsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Assignments">> =
  observer(function AssignmentsScreen({ navigation }) {
    const { assignments } = useStores()
    const {
      loading,
      error,
      clearError,
      analyzesAssigned,
      consultationsAssigned,
      diets,
      medicines,
      mixtures,
      procedures,
      regimes,
      researhAssigned,
    } = assignments

    // console.log(analyzesAssigned.map.has("asdasd"))
    // console.log(consultationsAssigned.map.has("asdasd"))
    // console.log(diets.map.has("asdasd"))
    // console.log(medicines.map.has("asdasd"))
    // console.log(mixtures.map.has("asdasd"))
    // console.log(procedures.map.has("asdasd"))
    // console.log(regimes.map.has("asdasd"))
    // console.log(researhAssigned.map.has("asdasd"))

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError customSubtitle={error} closeError={clearError} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">
            Назначения
          </Text>
          <Text>analyzesAssigned : {JSON.stringify(analyzesAssigned.map.values())}</Text>
          <Text>consultationsAssigned : {JSON.stringify(consultationsAssigned.map.values())}</Text>
          <Text>diets : {JSON.stringify(diets.map.values())}</Text>
          <Text>medicines : {JSON.stringify(medicines.map.values())}</Text>
          <Text>mixtures : {JSON.stringify(mixtures.map.values())}</Text>
          <Text>procedures : {JSON.stringify(procedures.map.values())}</Text>
          <Text>regimes : {JSON.stringify(regimes.map.values())}</Text>
          <Text>researhAssigned : {JSON.stringify(researhAssigned.map.values())}</Text>
          <Text>assignments : {JSON.stringify(assignments)}</Text>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
