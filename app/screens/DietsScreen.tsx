import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList } from "../navigators"
import { AssignmentStepper, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const DietsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Diets">> = observer(
  function DietsScreen({ navigation }) {
    const { assignments } = useStores()
    const { loading, diets } = assignments

    return (
      <ScreenWithActionSheet loading={loading} scrollEnabled={false}>
        <View style={$root}>
          <ScreenTitle text="dietsScreen.title" />
          <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
          <ScrollView horizontal>
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
            <AssignmentStepper text="20/11/2022" onNext={console.log} onPrev={console.log} />
          </ScrollView>
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
