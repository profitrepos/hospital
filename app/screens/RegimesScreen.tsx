import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { Regime, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface RegimeProps {
  title: string
}

const RegimeItem: FC<RegimeProps> = ({ title }) => {
  return (
    <View style={$regime}>
      <Text text={title} style={$regimeTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
}

export const RegimesScreen: FC<StackScreenProps<MedicalCardTabsParamList, "RegimesAssigned">> =
  observer(function RegimesScreen({ navigation }) {
    const { assignments } = useStores()
    const { loading, regimes } = assignments

    const dates = useMemo(
      () => [...regimes.map.keys()].sort((a, b) => Number(a) - Number(b)),
      [regimes],
    )

    return (
      <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
        <View style={$root}>
          <ScreenTitle text="regimesScreen.title" />
          <AssignmentsList<Regime>
            dates={dates}
            map={regimes.map}
            renderItem={(elem, index) => <RegimeItem title={elem.description} key={index} />}
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
const $regime: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $regimeTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
