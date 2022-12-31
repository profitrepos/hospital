import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { ResearchAssigned, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface ResearchProps {
  title: string
}

const ResearchItem: FC<ResearchProps> = ({ title }) => {
  return (
    <View style={$research}>
      <Text text={title} style={$researchTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
}

export const ResearhAssignedScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ResearhAssigned">
> = observer(function ResearhAssignedScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, researhAssigned } = assignments

  const dates = useMemo(
    () => [...researhAssigned.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [researhAssigned],
  )

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="researhAssignedScreen.title" />
        <AssignmentsList<ResearchAssigned>
          dates={dates}
          map={researhAssigned.map}
          renderItem={(elem, index) => <ResearchItem title={elem.description} key={index} />}
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
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
const $research: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $researchTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
