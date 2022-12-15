import React, { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { RecordList } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG } from "./svg"
import { Text } from "./ui"

interface RecordsListProps {
  records: RecordList
  onPress: (item: string) => void
}

export const RecordsList: FC<RecordsListProps> = ({ records, onPress }) => {
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
              <ArrowRightSVG style={$arrow} width={10} height={14} color={COLORS.lightBlue} />
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
const $arrow: ViewStyle = {
  paddingLeft: spacing.large,
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
