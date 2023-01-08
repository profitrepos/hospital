import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const EpicrisisDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "EpicrisisRecordsDetails">
> = observer(function EpicrisisDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { epicrises } = records
  const { activeEpicrisis } = epicrises

  console.log('activeEpicrisis ---> ', activeEpicrisis);

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="epicrisisDetailsScreen.title"
            txOptions={{
              date: activeEpicrisis?.date,
            }}
          />
          <ChaptersDetails chapters={activeEpicrisis?.chapters} author={activeEpicrisis?.author} />
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
