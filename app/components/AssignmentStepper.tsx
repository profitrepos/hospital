import React, { FC } from "react"
import { TextStyle, View, ViewProps, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../theme"
import { formatDate } from "../utils/formatDate"
import { Button, Text } from "./ui"

interface AssignmentStepperProps extends ViewProps {
  containerStyle?: ViewStyle
  dates: string[]
  activeIndex: number
  onPrev: () => void
  onNext: () => void
  prevDisabled?: boolean
  nextDisabled?: boolean
}

export const AssignmentStepper: FC<AssignmentStepperProps> = ({
  containerStyle,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  dates,
  activeIndex,
  ...props
}) => {
  return (
    <View style={[$container, containerStyle]} {...props}>
      <Button
        preset="text"
        style={$btn}
        RightAccessory={() => (
          <Icon name="arrow-back" style={[$icon, prevDisabled && $iconDisabled]} />
        )}
        onPress={onPrev}
        disabled={prevDisabled}
      />
      <View style={$date}>
        <Text
          preset="subheading"
          style={$dateText}
          text={formatDate(new Date(Number(dates[activeIndex]) * 1000))}
        />
      </View>
      <Button
        preset="text"
        style={$btn}
        RightAccessory={() => (
          <Icon name="arrow-forward" style={[$icon, nextDisabled && $iconDisabled]} />
        )}
        onPress={onNext}
        disabled={nextDisabled}
      />
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
const $btn: ViewStyle = {
  width: "auto",
}
const $icon: TextStyle = {
  fontSize: 20,
  color: COLORS.mainBlue,
}
const $iconDisabled: TextStyle = {
  color: COLORS.disabled,
}
const $date: ViewStyle = {
  flex: 1,
  marginHorizontal: spacing.medium,
  alignItems: "center",
  justifyContent: "center",
}
const $dateText: TextStyle = {
  color: COLORS.mainBlue,
}
