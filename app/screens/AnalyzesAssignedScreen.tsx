import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { AnalysisAssigned, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface AnalysisProps {
  title: string
}

const Analysis: FC<AnalysisProps> = ({ title }) => {
  return (
    <View style={$analysis}>
      <Text text={title} style={$analysisTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
}

export const AnalyzesAssignedScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "AnalyzesAssigned">
> = observer(function AnalyzesAssignedScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, analyzesAssigned } = assignments

  const dates = useMemo(
    () => [...analyzesAssigned.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [analyzesAssigned],
  )

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="analyzesAssignedScreen.title" />
        <AssignmentsList<AnalysisAssigned>
          dates={dates}
          map={analyzesAssigned.map}
          renderItem={(elem, index) => <Analysis title={elem.description} key={index} />}
        />
      </View>
    </ScreenWithActionSheet>
  )
})

const $flex: ViewStyle = {
  flex: 1,
}
const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
  flex: 1,
}
const $analysis: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $analysisTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
