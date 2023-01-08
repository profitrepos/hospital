import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { OperationProtocol, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface OperationProtocolItemProps {
  operationProtocol: OperationProtocol
  onPress: (operationProtocol: OperationProtocol) => void
}

const OperationProtocolItem: FC<OperationProtocolItemProps> = ({ operationProtocol, onPress }) => {

  const handlePress = () => {
    onPress(operationProtocol)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={operationProtocol.code} />
          <Text preset="helper" style={$info} text={operationProtocol.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const OperationProtocolRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "OperationProtocolRecords">
> = observer(function OperationProtocolRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, operationProtocols } = records
  const { setActiveOperationProtocol } = operationProtocols

  const onPress = (operationProtocol: OperationProtocol) => {
    setActiveOperationProtocol(operationProtocol.uid)
    navigation.navigate(navigateToDictionary.operationProtocolDetails)
  }

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="operationProtocolRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {operationProtocols.filteredItems.map((operationProtocol) => {
              return <OperationProtocolItem onPress={onPress} operationProtocol={operationProtocol} key={operationProtocol.uid} />
            })}
          </ScrollView>
        </View>
      </View>
    </ScreenWithActionSheet>
  )
})

const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
  flex: 1
}
const $flex: ViewStyle = {
  flex: 1,
}
const $list: ViewStyle = {
  paddingHorizontal: spacing.small,
  flex: 1,
}

const $scrollView: ViewStyle = {
  flexGrow: 1,
}
const $item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
}
const $values: ViewStyle = {
  flex: 1,
}
const $name: TextStyle = {
  fontSize: 16,
}
const $info: TextStyle = {
  color: COLORS.subtitleGray,
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}