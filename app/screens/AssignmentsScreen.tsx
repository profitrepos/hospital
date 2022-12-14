import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"

export const AssignmentsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Assignments">> =
  observer(function AssignmentsScreen({ navigation }) {
    return (
      <ScreenWithActionSheet>
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }} preset="heading">
            Назначения
          </Text>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
