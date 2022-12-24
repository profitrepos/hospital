import React, { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { RecordMenu } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { Text } from "./ui"

interface RecordsMenuProps {
  records: RecordMenu
  onPress: (item: string) => void
}

export const RecordsMenu: FC<RecordsMenuProps> = ({ records, onPress }) => {
  return (
    <View style={$container}>
      {Object.keys(records).map((key) => {
        const handlePress = () => {
          onPress(key)
        }
        return (
          <TouchableOpacity key={key} onPress={handlePress} activeOpacity={0.6}>
            <View style={$item}>
              <View style={$values}>
                <Text preset="subheading" style={$name} text={records[key].name} />
                <Text preset="helper" style={$count} text={`(${records[key].count})`} />
              </View>
              <Icon name="chevron-right" style={$arrow} />
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const $container: ViewStyle = {}
const $values: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
const $item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
}
const $name: TextStyle = {
  fontSize: 16,
}
const $count: TextStyle = {
  marginLeft: spacing.extraSmall,
  color: COLORS.lightBlue,
}
