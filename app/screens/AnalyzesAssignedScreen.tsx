import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { AnalysisAssigned, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface AnalysisProps {
  analysis: AnalysisAssigned
  onPress: (analysis: AnalysisAssigned) => void
}

const Analysis: FC<AnalysisProps> = ({ analysis, onPress }) => {
  const handlePress = () => {
    onPress(analysis)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={$analysis}>
      <Text text={analysis.description} style={$analysisTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </TouchableOpacity>
  )
}

export const AnalyzesAssignedScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "AnalyzesAssigned">
> = observer(function AnalyzesAssignedScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, analyzesAssigned } = assignments

  const { setActiveAnalysis } = analyzesAssigned

  const dates = useMemo(
    () => [...analyzesAssigned.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [analyzesAssigned],
  )

  const onPress = (analysis: AnalysisAssigned) => {
    navigation.navigate(navigateToDictionary.analysisAssignedDetails)
    setActiveAnalysis(analysis)
  }

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="analyzesAssignedScreen.title" />
        <AssignmentsList<AnalysisAssigned>
          dates={dates}
          map={analyzesAssigned.map}
          renderItem={(elem, index) => <Analysis onPress={onPress} analysis={elem} key={index} />}
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
