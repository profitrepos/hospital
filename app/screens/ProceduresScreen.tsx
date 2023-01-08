import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { Procedure, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface ProcedureProps {
  procedure: Procedure
  onPress: (procedure: Procedure) => void
}

const ProcedureItem: FC<ProcedureProps> = ({ procedure, onPress }) => {
  const handlePress = () => {
    onPress(procedure)
  }

  return (
    <TouchableOpacity style={$procedure} onPress={handlePress} activeOpacity={0.6}>
      <Text text={procedure.description} style={$procedureTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </TouchableOpacity>
  )
}

export const ProceduresScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ProceduresAssigned">
> = observer(function ProceduresScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, procedures } = assignments
  const { setActiveProcedure } = procedures

  const dates = useMemo(
    () => [...procedures.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [procedures],
  )

  const onPress = (procedure: Procedure) => {
    setActiveProcedure(procedure)
    navigation.navigate(navigateToDictionary.procedureDetails)
  }

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="proceduresScreen.title" />
        <AssignmentsList<Procedure>
          dates={dates}
          map={procedures.map}
          renderItem={(elem, index) => (
            <ProcedureItem onPress={onPress} procedure={elem} key={index} />
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
const $procedure: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $procedureTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
