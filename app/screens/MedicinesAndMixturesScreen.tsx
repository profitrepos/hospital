import React, { FC, memo, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { MedicinesAndMixtures, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface MedicineItemProps {
  medicine: MedicinesAndMixtures
}

const MedicineItem: FC<MedicineItemProps> = memo(({ medicine }) => {
  return (
    <View style={$medicine}>
      <View style={$medicineInfo}>
        <Text preset="subheading" text={medicine.description} style={$medicineDescr} />
        <Text preset="helper" text={medicine.comment} style={$medicineComment} />
        {medicine.executed && (
          <Text preset="helper" text={medicine.executed} style={$medicineComment} />
        )}
      </View>
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
})

export const MedicinesAndMixturesScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "MedicinesAndMixturesAssigned">
> = observer(function MedicinesAndMixturesScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, medicinesAndMixtures } = assignments

  const dates = useMemo(
    () => [...medicinesAndMixtures.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [medicinesAndMixtures],
  )

  return (
    <ScreenWithActionSheet
      contentContainerStyle={$flex}
      scrollEnabled={false}
      loading={loading}
      showPatientInfo
    >
      <View style={$root}>
        <ScreenTitle text="medicinesAndMixturesScreen.title" />
        <AssignmentsList<MedicinesAndMixtures>
          dates={dates}
          map={medicinesAndMixtures.map}
          renderItem={(elem, index) => <MedicineItem medicine={elem} key={index} />}
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
const $list: ViewStyle = {
  marginVertical: spacing.medium,
  paddingHorizontal: spacing.small,
  flex: 1,
}
const $listItem: ViewStyle = {
  width: "100%",
  flex: 1,
}
const $scrollView: ViewStyle = {
  flexGrow: 1,
}
const $medicine: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
}
const $medicineInfo: ViewStyle = {
  flex: 1,
  marginRight: spacing.small,
}
const $medicineDescr: TextStyle = {
  fontSize: 16,
}
const $medicineComment: TextStyle = {
  color: COLORS.subtitleGray,
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
