import React, { FC, useCallback, useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {Screen} from "./ui"
import { ViewStyle } from 'react-native';
import { goBack, resetRoot } from '../navigators';


interface ScreenWithActionSheetProps {
    children?: React.ReactNode 
}

const snapPoints = ["90%", "100%"]

export const ScreenWithActionSheet: FC<ScreenWithActionSheetProps> = ({children}) => {

    const sheetRef = useRef<BottomSheet>(null);

    const onClose = () => {
        resetRoot()
        goBack()
    }

    return <Screen preset="fixed" style={$root} filled>
        <BottomSheet
            ref={sheetRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={$backgroundStyle}
            enablePanDownToClose
            onClose={onClose}
        >
        <BottomSheetScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$contentContainer}>
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
    </Screen>
}

const $root:ViewStyle = {
    flex: 1
}
const $contentContainer: ViewStyle ={
    backgroundColor: "#fff",
}
const $backgroundStyle: ViewStyle = {
    borderRadius: 20 
}