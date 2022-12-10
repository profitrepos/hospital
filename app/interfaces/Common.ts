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
  extends IGridMenuItem<
    Exclude<
      MainNavigatorScreenNamesType,
      "Auth" | "Home" | "Verification" | "Otp" | "CreatePassword"
    >
  > {}

export enum ASYNC_STORAGE_KEYS {
  ROOT_STATE_STORAGE_KEY = "STORE",
  STORAGE_LANGUAGES_KEY = "LANGUAGES",
  NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE",
}

export enum SECURE_STORAGE_KEYS {
  PINCODE_KEY = "PINCODE",
  IIN = "IIN",
}
