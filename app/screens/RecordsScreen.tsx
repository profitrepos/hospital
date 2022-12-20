import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AppError, AppModal, RecordsList, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

const navigateToDictionary = {
  analyzes: "AnalyzesRecords",
  consultations: "ConsultationsRecords",
  diagnosis: "DiagnosisRecords",
  epicrisis: "EpicrisisRecords",
  extracts: "ExtractsRecords",
  initialInspections: "InitialInspectionsRecords",
  operationProtocols: "OperationProtocolsRecords",
  research: "ResearchRecords",
}

export const RecordsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Records">> = observer(
  function RecordsScreen({ navigation }) {
    const { records } = useStores()
    const { loading, recordsList, error, clearError } = records

    const handlerRecord = (key: string) => {
      navigation.navigate(navigateToDictionary[key])
    }

    if (error) {
      return (
        <AppModal>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View style={$root}>
          <View style={$records}>
            <ScreenTitle text="recordsScreen.title" />
            <View style={$listContainer}>
              <RecordsList records={recordsList} onPress={handlerRecord} />
            </View>
          </View>
        </View>
      </ScreenWithActionSheet>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.extraSmall,
}
const $records: ViewStyle = {
  paddingVertical: spacing.medium,
}
const $listContainer: ViewStyle = {
  padding: spacing.large,
}
