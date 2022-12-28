import React, { FC, ReactNode, useState } from "react"
import { GestureResponderEvent, ScrollView, View, ViewStyle } from "react-native"
import { spacing } from "../theme"
import { AssignmentStepper } from "./AssignmentStepper"

interface AssignmentsListProps<T> {
  dates: string[]
  map: Map<string, T[]>
  renderItem: (elem: T, index?: number) => ReactNode
}

export const AssignmentsList = <T,>({ dates, map, renderItem }: AssignmentsListProps<T>) => {
  const [index, setIndex] = useState(0)
  const [swipeX, setSwipeX] = useState(0)

  const next = () => {
    setIndex(index + 1)
  }

  const prev = () => {
    setIndex(index - 1)
  }

  const onTouchStart = (e: GestureResponderEvent) => {
    setSwipeX(e.nativeEvent.pageX)
  }

  const onTouchEnd = (e: GestureResponderEvent) => {
    if (e.nativeEvent.pageX - swipeX > 20 && index > 0) {
      prev()
    } else if (swipeX - e.nativeEvent.pageX > 20 && index < dates.length - 1) {
      next()
    }
  }

  const assignmentsForDay: T[] = map.get(dates[index]) || []

  return (
    <View style={$flex}>
      <AssignmentStepper
        activeIndex={index}
        dates={dates}
        onNext={next}
        onPrev={prev}
        prevDisabled={index === 0}
        nextDisabled={index === dates.length - 1}
      />
      <View style={$list}>
        <ScrollView
          contentContainerStyle={$scrollView}
          style={$flex}
          showsVerticalScrollIndicator={false}
        >
          <View style={$listItem} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {assignmentsForDay.map((assignment, index) => {
              return renderItem(assignment, index)
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const $flex: ViewStyle = {
  flex: 1,
}
const $list: ViewStyle = {
  marginVertical: spacing.medium,
  paddingHorizontal: spacing.small,
  flex: 1,
}
const $listItem: ViewStyle = {
  width: "100%",
  flex: 1,
}
const $scrollView: ViewStyle = {
  flexGrow: 1,
}
