import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const ExtractDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ExtractRecordsDetails">
> = observer(function ExtractDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { extracts } = records
  const { activeExtract } = extracts

  console.log('activeExtract ----> ', activeExtract);
  

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="extractDetailsScreen.title"
            txOptions={{
              date: activeExtract?.date,
            }}
          />
          <ChaptersDetails chapters={activeExtract?.chapters} author={activeExtract?.author} />
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
