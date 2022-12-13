import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"

export const PatientsJournalScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "PatientsJournal">
> = observer(function PatientsJournalScreen({ navigation }) {
  const { records } = useStores()
  const { loading, journal, clearError, error } = records

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
          {JSON.stringify(journal)}
        </Text>
      </View>
    </ScreenWithActionSheet>
  )
})
