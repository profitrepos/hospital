import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const EpicrisisRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "EpicrisisRecords">
> = observer(function EpicrisisRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading } = records

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="epicrisisRecordsScreen.title" />
      </View>
    </ScreenWithActionSheet>
  )
})

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
