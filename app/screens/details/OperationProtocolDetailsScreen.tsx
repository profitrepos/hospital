import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../../components/ui"
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
