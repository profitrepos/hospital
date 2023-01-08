import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { Diet, Regime, RegimeAndDiet, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface RegimeProps {
  regimeOrDiet: Regime | Diet
  onPress: (regimeOrDiet: Regime | Diet) => void
}

const RegimeItem: FC<RegimeProps> = ({ regimeOrDiet, onPress }) => {
  const handlePress = () => {
    onPress(regimeOrDiet)
  }

  return (
    <TouchableOpacity style={$regime} onPress={handlePress} activeOpacity={0.6}>
      <Text text={`${regimeOrDiet.type}: ${regimeOrDiet.description}`} style={$regimeTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </TouchableOpacity>
  )
}

export const RegimesAndDietsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "RegimesAndDietsAssigned">
> = observer(function RegimesAndDietsScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, regimesAndDiets } = assignments
  const { setActiveRegimeOrDiet } = regimesAndDiets

  const dates = useMemo(
    () => [...regimesAndDiets.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [regimesAndDiets],
  )

  const onPress = (regimeOrDiet: Regime | Diet) => {
    setActiveRegimeOrDiet(regimeOrDiet)
    navigation.navigate(navigateToDictionary.regimeOrDietAssignedDetails)
  }

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="regimesAndDietsScreen.title" />
        <AssignmentsList<RegimeAndDiet>
          dates={dates}
          map={regimesAndDiets.map}
          renderItem={(elem, index) => (
            <RegimeItem regimeOrDiet={elem} onPress={onPress} key={index} />
          )}
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
