import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const SubstantiationDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "SubstantiationRecordsDetails">
> = observer(function SubstantiationDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { substantiations } = records
  const { activeSubstantiation } = substantiations

  console.log('activeSubstantiation ---> ', activeSubstantiation);
  

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="substantiationDetailsScreen.title"
            txOptions={{
              date: activeSubstantiation?.date,
            }}
          />
          <ChaptersDetails chapters={activeSubstantiation?.chapters} author={activeSubstantiation?.author} />
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
