import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const InitialInspectionDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "InitialInspectionRecordsDetails">
> = observer(function InitialInspectionDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { initialInspections } = records
  const { activeInitialInspection } = initialInspections

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="initialInspectionDetailsScreen.title"
            txOptions={{
              date: activeInitialInspection?.date,
            }}
          />
          <ChaptersDetails
            chapters={activeInitialInspection?.chapters}
            author={activeInitialInspection?.author}
          />
        </View>
      </View>
    </ScreenWithActionSheet>
  )
})

const $root: ViewStyle = {
  paddingHorizontal: spacing.extraSmall,
}
const $detailContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
