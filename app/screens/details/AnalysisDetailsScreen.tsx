import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../../components/ui"
import { IndicatorsDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const AnalysisDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "AnalysisRecordsDetails">
> = observer(function AnalysisDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { analyzes } = records
  const { activeAnalysis } = analyzes

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="analysisDetailsScreen.title"
            txOptions={{
              date: activeAnalysis?.date,
            }}
          />
          <View style={$info}>
            <Text preset="bold" tx="details.author" />
            <Text preset="default" text={activeAnalysis?.author} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.code" />
            <Text preset="default" text={activeAnalysis?.code} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="analysisDetailsScreen.name" />
            <Text preset="default" text={activeAnalysis?.name} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.status" />
            <Text preset="default" text={activeAnalysis?.status} />
          </View>
          <IndicatorsDetails indicators={activeAnalysis?.indicators} />
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
const $info: ViewStyle = {
  marginBottom: spacing.medium,
}
