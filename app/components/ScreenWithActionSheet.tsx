import React, { FC, useCallback, useMemo, useRef } from "react"
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"
import { Screen } from "./ui"
import { ViewStyle } from "react-native"
import { goBack, navigate, resetRoot } from "../navigators"

interface ScreenWithActionSheetProps {
  children?: React.ReactNode
  onClose?: () => void
}

const snapPoints = ["90%", "100%"]

export const ScreenWithActionSheet: FC<ScreenWithActionSheetProps> = ({ children, onClose }) => {
  const sheetRef = useRef<BottomSheet>(null)

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      navigate("Home")
    }
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
        animateOnMount={false}
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={$contentContainer}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
const $contentContainer: ViewStyle = {
  backgroundColor: "#fff",
  flex: 1,
}
const $backgroundStyle: ViewStyle = {
  borderRadius: 20,
}
