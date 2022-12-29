import React, { FC, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { Diet, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface DietProps {
  title: string
}

const DietItem: FC<DietProps> = ({ title }) => {
  return (
    <View style={$diet}>
      <Text text={title} style={$dietTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
}

export const DietsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "DietsAssigned">> =
  observer(function DietsScreen({ navigation }) {
    const { assignments } = useStores()
    const { loading, diets } = assignments

    const dates = useMemo(
      () => [...diets.map.keys()].sort((a, b) => Number(a) - Number(b)),
      [diets],
    )

    return (
      <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading}>
        <View style={$root}>
          <ScreenTitle text="dietsScreen.title" />
          <AssignmentsList<Diet>
            dates={dates}
            map={diets.map}
            renderItem={(elem, index) => <DietItem title={elem.description} key={index} />}
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
const $diet: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $dietTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
