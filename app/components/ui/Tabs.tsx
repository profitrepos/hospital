import React, { FC } from "react"
import { TextStyle, useWindowDimensions, ViewStyle } from "react-native"
import { TabView, Route, SceneRendererProps, TabBar } from "react-native-tab-view"
import { COLORS } from "../../theme"
import { Text } from "./Text"

interface TabsProps {
  routes: Route[]
  renderScene: (
    props: SceneRendererProps & {
      route: Route
    },
  ) => React.ReactNode
}

// EXAMPLE https://github.com/satya164/react-native-tab-view

const renderLabel = ({ route }) => {
  return <Text style={$label}>{route.title}</Text>
}

const renderTabBar = (props) => (
  <TabBar {...props} indicatorStyle={$indicator} style={$tabBar} renderLabel={renderLabel} />
)

export const Tabs: FC<TabsProps> = ({ routes, renderScene }) => {
  const { width } = useWindowDimensions()
  const [index, setIndex] = React.useState(0)

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width }}
    />
  )
}
const $tabBar: ViewStyle = {
  backgroundColor: COLORS.mainBlue,
  zIndex: 1,
}
const $indicator: ViewStyle = {
  backgroundColor: COLORS.lightBlue,
}
const $label: TextStyle = {
  color: "#fff",
}
