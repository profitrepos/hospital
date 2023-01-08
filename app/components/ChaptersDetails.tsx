import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Chapter } from "../store"
import { spacing } from "../theme"
import { Text } from "./ui"

interface ChaptersDetailsProps {
  chapters: Chapter[]
  author?: string
}

export const ChaptersDetails: FC<ChaptersDetailsProps> = ({ chapters, author }) => {
  return (
    <View style={$container}>
      {
        author && <View style={$chapter}>
        <Text preset="bold" tx="details.author" style={$header} />
        <Text preset="default" text={author} style={$text} />
      </View>
      }
      {chapters &&
        chapters.map((chapter) => {
          return (
            <View style={$chapter} key={chapter.chapter}>
              <Text preset="bold" text={chapter.chapter} style={$header} />
              <Text preset="default" text={chapter.text} style={$text} />
            </View>
          )
        })}
    </View>
  )
}

const $container: ViewStyle = {}
const $chapter: ViewStyle = {
  marginBottom: spacing.medium,
}
const $header: TextStyle = {}
const $text: TextStyle = {}
