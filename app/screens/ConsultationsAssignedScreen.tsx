import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentsList, ScreenWithActionSheet } from "../components"
import { ConsultationAssigned, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface ConsultationsAssignedProps {
  title: string
}

const ConsultationsAssigned: FC<ConsultationsAssignedProps> = ({ title }) => {
  return (
    <View style={$consultation}>
      <Text text={title} style={$consultationTitle} />
      <Icon name="chevron-right" style={$arrow} />
    </View>
  )
}

export const ConsultationsAssignedScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ConsultationsAssigned">
> = observer(function ConsultationsAssignedScreen({ navigation }) {
  const { assignments } = useStores()
  const { loading, consultationsAssigned } = assignments

  const dates = useMemo(
    () => [...consultationsAssigned.map.keys()].sort((a, b) => Number(a) - Number(b)),
    [consultationsAssigned],
  )

  return (
    <ScreenWithActionSheet contentContainerStyle={$flex} loading={loading}>
      <View style={$root}>
        <ScreenTitle text="consultationsAssignedScreen.title" />
        <AssignmentsList<ConsultationAssigned>
          dates={dates}
          map={consultationsAssigned.map}
          renderItem={(elem, index) => (
            <ConsultationsAssigned title={elem.description} key={index} />
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
const $consultation: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
  width: "100%",
}
const $consultationTitle: TextStyle = {
  fontSize: 16,
  flex: 1,
  marginRight: spacing.small,
}
