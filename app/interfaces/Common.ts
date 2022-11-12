import { StyleProp, ViewStyle } from "react-native"
import { AppStackParamList } from "../navigators"

export interface SVGPropsType {
  width?: number
  height?: number
  color?: string
  style?: StyleProp<ViewStyle>
}

export type MainNavigatorScreenNamesType = keyof AppStackParamList

export interface IGridMenuItem<T> {
  title: string
  icon: React.FC<SVGPropsType>
  navigateTo: T
}

export interface IHomeMenuItem
  extends IGridMenuItem<Exclude<MainNavigatorScreenNamesType, "Auth" | "Home">> {}
