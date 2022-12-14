import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

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
          <ScreenTitle
            text="journalScreen.title"
            txOptions={{
              date: activeJournal?.date,
            }}
          />
          <ChaptersDetails chapters={activeJournal?.chapters} author={activeJournal?.author} />
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
