import Constants from "expo-constants"
import { Dimensions, Platform } from "react-native"

const { width, height } = Dimensions.get("window")

export const SIZES = {
  width,
  height,
  statusBarHeight: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
}
