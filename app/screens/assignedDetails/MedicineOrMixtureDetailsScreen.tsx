import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC, Fragment } from "react"
import { View, ViewStyle } from "react-native"
import { ScreenWithActionSheet } from "../../components"
import { ScreenTitle, Text } from "../../components/ui"
import { MedicalCardTabsParamList } from "../../navigators"
import { Medicine, Mixture, useStores } from "../../store"
import { spacing } from "../../theme"

const keys = ["code", "assigned", "assignedBy", "executed", "executedBy", "comment"] as const

export const MedicineOrMixtureDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "MedicineOrMixtureDetails">
> = observer(function MedicineOrMixtureDetailsScreen() {
  const { assignments } = useStores()
  const { medicinesAndMixtures } = assignments
  const { activeMedicineOrMixture } = medicinesAndMixtures

  const isMedicine = (item: Medicine | Mixture): item is Medicine => {
    if (item) {
      return item.type === "Медикаменты"
    }
    return false
  }

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text={
              isMedicine(activeMedicineOrMixture)
                ? "medicineOrMixtureDetailsScreen.medicine"
                : "medicineOrMixtureDetailsScreen.mixture"
            }
          />
          {activeMedicineOrMixture && (
            <Fragment>
              {keys.map((key) => {
                return (
                  <View style={$info} key={key}>
                    <Text preset="bold" tx={`details.${key}`} />
                    <Text preset="default" text={activeMedicineOrMixture[key]} />
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
