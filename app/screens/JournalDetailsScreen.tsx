import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { BackButton, ScreenTitle } from "../components/ui"
import { ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { COLORS, spacing } from "../theme"
import { MedicalCardTabsParamList } from "../navigators"
import { ChaptersDetails } from "../components/ChaptersDetails"

export const JournalDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "JournalDetails">
> = observer(function JournalDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { journals } = records
  const { activeJournal } = journals

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle text="journalScreen.title" />
          <ChaptersDetails chapters={activeJournal?.chapters} />
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
