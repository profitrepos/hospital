import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../../components/ui"
import { ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const ResearchDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ResearchRecordsDetails">
> = observer(function ResearchDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { research } = records
  const { activeResearch } = research

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="researchDetailsScreen.title"
            txOptions={{
              date: activeResearch?.date,
            }}
          />
          <View style={$info}>
            <Text preset="bold" tx="details.author" />
            <Text preset="default" text={activeResearch?.author} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.code" />
            <Text preset="default" text={activeResearch?.code} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="consultationDetailsScreen.name" />
            <Text preset="default" text={activeResearch?.name} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.status" />
            <Text preset="default" text={activeResearch?.status} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.description" />
            <Text preset="default" text={activeResearch?.description} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.conclusion" />
            <Text preset="default" text={activeResearch?.conclusion} />
          </View>
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
