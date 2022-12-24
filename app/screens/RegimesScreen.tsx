import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const RegimesScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Regimes">> = observer(
  function RegimesScreen({ navigation }) {
    const { records } = useStores()
    const { loading } = records

    return (
      <ScreenWithActionSheet loading={loading}>
        <View style={$root}>
          <ScreenTitle text="regimesScreen.title" />
        </View>
      </ScreenWithActionSheet>
    )
  },
)

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
