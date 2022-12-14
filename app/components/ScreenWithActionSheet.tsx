import React, { FC, useRef } from "react"
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"
import { Preloader, Screen } from "./ui"
import { View, ViewStyle } from "react-native"
import { navigate } from "../navigators"
import { spacing } from "../theme"

interface ScreenWithActionSheetProps {
  children?: React.ReactNode
  onClose?: () => void
  loading?: boolean
  scrollEnabled?: boolean
}

const snapPoints = ["90%", "100%"]

export const ScreenWithActionSheet: FC<ScreenWithActionSheetProps> = ({
  children,
  onClose,
  loading,
  scrollEnabled = true,
}) => {
  const sheetRef = useRef<BottomSheet>(null)

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      navigate("Home")
    }
  }

  const renderContent = () => {
    if (scrollEnabled) {
      return (
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={$contentContainer}
        >
          {loading ? <Preloader style={$preloader} /> : children}
        </BottomSheetScrollView>
      )
    }
    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
        {loading ? <Preloader style={$preloader} /> : children}
      </View>
    )
  }

  return (
    <Screen preset="fixed" style={$root} filled>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={$backgroundStyle}
        enablePanDownToClose
        onClose={handleClose}
        animateOnMount={true}
      >
        {renderContent()}
      </BottomSheet>
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
const $contentContainer: ViewStyle = {
  backgroundColor: "#fff",
}
const $backgroundStyle: ViewStyle = {
  borderRadius: 20,
}
const $preloader: ViewStyle = {
  marginTop: spacing.large,
}
