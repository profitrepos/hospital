import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../../components/ui"
import { ScreenWithActionSheet } from "../../components"
import { useStores } from "../../store"
import { spacing } from "../../theme"
import { MedicalCardTabsParamList } from "../../navigators"

export const OperationProtocolDetailsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "OperationProtocolRecordsDetails">
> = observer(function OperationProtocolDetailsScreen({ navigation }) {
  const { records } = useStores()
  const { operationProtocols } = records
  const { activeOperationProtocol } = operationProtocols

  return (
    <ScreenWithActionSheet showBackBtn showPatientInfo>
      <View style={$root}>
        <View style={$detailContainer}>
          <ScreenTitle
            text="operationProtocolDetailsScreen.title"
            txOptions={{
              date: activeOperationProtocol?.date,
            }}
          />
          <View style={$info}>
            <Text preset="bold" tx="details.author" />
            <Text preset="default" text={activeOperationProtocol?.author} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="details.code" />
            <Text preset="default" text={activeOperationProtocol?.code} />
          </View>
          <View style={$info}>
            <Text preset="bold" tx="operationProtocolDetailsScreen.protocol" />
            <Text preset="default" text={activeOperationProtocol?.protocol} />
          </View>
        </View>
      </View>
    </ScreenWithActionSheet>
  )
})

const $root: ViewStyle = {
  paddingHorizontal: spacing.extraSmall,
}
const $detailContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
const $info: ViewStyle = {
  marginBottom: spacing.medium,
}
