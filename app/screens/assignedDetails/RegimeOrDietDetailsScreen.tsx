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

export const RegimeOrDietDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "RegimeOrDietAssignedDetails">
> = observer(function RegimeOrDietDetailsScreen() {
  const { assignments } = useStores()
  const { regimesAndDiets } = assignments
  const { activeRegimeOrDiet } = regimesAndDiets

  const isDiet = (regimeOrDiet: Regime | Diet): regimeOrDiet is Diet => {
    if (regimeOrDiet) {
      return regimeOrDiet.type === "Диета"
    }
    return false
  }

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text={
              isDiet(activeRegimeOrDiet)
                ? "regimeOrDietDetailsScreen.diet"
                : "regimeOrDietDetailsScreen.regime"
            }
          />
          {activeRegimeOrDiet && (
            <Fragment>
              {keys.map((key) => {
                return (
                  <View style={$info} key={key}>
                    <Text preset="bold" tx={`details.${key}`} />
                    <Text preset="default" text={activeRegimeOrDiet[key]} />
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
