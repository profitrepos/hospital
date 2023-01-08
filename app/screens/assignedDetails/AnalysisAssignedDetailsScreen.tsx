import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { ScreenWithActionSheet } from "../../components"
import { ScreenTitle } from "../../components/ui"
import { MedicalCardTabsParamList } from "../../navigators"
import { spacing } from "../../theme"

export const AnalysisAssignedDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "AnalysisAssignedDetails">
> = observer(function AnalysisAssignedDetailsScreen() {
  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle text="analysisAssignedDetailsScreen.title" />
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
