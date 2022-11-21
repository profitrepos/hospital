import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Filter, Screen, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"

export const PatientsScreen: FC<StackScreenProps<AppStackParamList, "Patients">> = observer(
  function PatientsScreen() {
    return (
      <Screen style={$root} preset="scroll">
        <Filter />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus hic tempora ab,
          soluta, facere ipsum voluptate similique, quod deleniti maxime qui. Impedit aut
          consequatur, dignissimos porro odio maiores libero consequuntur nemo id ipsum molestiae
          animi delectus natus officia debitis iure aliquam mollitia, architecto repudiandae odit
          dicta tenetur enim! Tempora fugit voluptas accusantium. Voluptatem atque rerum, hic
          incidunt eius et officiis consequuntur quas odio, error perferendis ad sit. Officia
          mollitia corporis commodi amet dolorum, voluptates et nam enim dolores quibusdam
          distinctio blanditiis reiciendis quisquam magnam? Modi sit mollitia eaque molestias enim
          labore, quasi ea suscipit quae at blanditiis recusandae ex?
        </Text>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
