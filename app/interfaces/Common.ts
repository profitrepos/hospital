import { StyleProp, ViewStyle } from "react-native"
import { TxKeyPath } from "../i18n"
import { AppStackParamList } from "../navigators"

export interface SVGPropsType {
  width?: number
  height?: number
  color?: string
  style?: StyleProp<ViewStyle>
}

export type MainNavigatorScreenNamesType = keyof AppStackParamList

export interface IGridMenuItem<T> {
  title: TxKeyPath
  icon: React.FC<SVGPropsType>
  navigateTo: T
}

export interface IHomeMenuItem
  extends IGridMenuItem<Exclude<MainNavigatorScreenNamesType, "Auth" | "Home">> {}

export enum STORAGE_KEYS {
  ROOT_STATE_STORAGE_KEY = "STORE",
  STORAGE_LANGUAGES_KEY = "LANGUAGES",
  PINCODE_KEY = "PINCODE",
}
