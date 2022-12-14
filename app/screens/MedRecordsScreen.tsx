import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"

export const MedRecordsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "MedRecords">> =
  observer(function MedRecordsScreen({ navigation }) {
    const { records } = useStores()
    const { loading, initialInspection, error, clearError } = records

    if (error) {
      return (
        <AppModal>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">
            {JSON.stringify(initialInspection)}
          </Text>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
