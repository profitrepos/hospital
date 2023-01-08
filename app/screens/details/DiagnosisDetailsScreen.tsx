import React, { FC, Fragment } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../../components/ui"
import { ChaptersDetails, ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const DiagnosisDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "DiagnosisRecordsDetails">
> = observer(function DiagnosisDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { diagnosis } = records
  const { activeDiagnosis } = diagnosis

  console.log("activeDiagnosis --- ", activeDiagnosis)

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="diagnosisDetailsScreen.title"
            txOptions={{
              date: activeDiagnosis?.date,
            }}
          />
          <View style={$info}>
            <Text preset="bold" tx="details.author" />
            <Text preset="default" text={activeDiagnosis?.author} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.code" />
            <Text preset="default" text={activeDiagnosis?.code} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.kind" />
            <Text preset="default" text={activeDiagnosis?.kind} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.type" />
            <Text preset="default" text={activeDiagnosis?.type} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.description" />
            <Text preset="default" text={activeDiagnosis?.description} />
          </View>
          {activeDiagnosis.substantiation && (
            <Fragment>
              <Text
                style={$substantiation}
                preset="bold"
                tx="diagnosisDetailsScreen.substantiation"
              />
              <ChaptersDetails chapters={activeDiagnosis.substantiation.chapters} />
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
const $substantiation: TextStyle = {
  fontSize: 20,
  marginVertical: 20,
  textAlign: "center",
}
