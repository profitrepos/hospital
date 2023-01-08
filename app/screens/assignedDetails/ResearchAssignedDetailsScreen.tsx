import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, Fragment } from "react"
import { View, ViewStyle } from "react-native"
import { ScreenWithActionSheet } from "../../components"
import { ScreenTitle, Text } from "../../components/ui"
import { MedicalCardTabsParamList } from "../../navigators"
import { Diet, Regime, useStores } from "../../store"
import { spacing } from "../../theme"

const keys = ["code", "assigned", "assignedBy", "executed", "executedBy", "comment"] as const

export const ResearchAssignedDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ResearchAssignedDetails">
> = observer(function ResearchAssignedDetailsScreen() {
  const { assignments } = useStores()
  const { researhAssigned } = assignments
  const { activeResearchAssigned } = researhAssigned

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle text="researchAssignedDetailsScreen.title" />
          {activeResearchAssigned && (
            <Fragment>
              {keys.map((key) => {
                return (
                  <View style={$info} key={key}>
                    <Text preset="bold" tx={`details.${key}`} />
                    <Text preset="default" text={activeResearchAssigned[key]} />
                  </View>
                )
              })}
            </Fragment>
          )}
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
