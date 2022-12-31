import React, { FC, ReactElement, ReactNode, useMemo, useRef } from "react"
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"
import { BackButton, Preloader, Screen, ScreenTitle } from "./ui"
import { TextStyle, View, ViewStyle } from "react-native"
import { navigate } from "../navigators"
import { COLORS, spacing } from "../theme"
import { useStores } from "../store"

//TODO: сделать списки медзаписей
//TODO: сделать экраны с детальным просмотром
//TODO: добавить дату и время в детальные экраны
//TODO: пушы
//TODO: обновления

interface ScreenWithActionSheetProps {
  children?: ReactNode
  onClose?: () => void
  loading?: boolean
  scrollEnabled?: boolean
  animateOnMount?: boolean
  contentContainerStyle?: ViewStyle
  handleStyle?: ViewStyle
  enableContentPanningGesture?: boolean
  showPatientInfo?: boolean
  showBackBtn?: boolean
}

const snapPoints = ["90%", "100%"]

export const ScreenWithActionSheet: FC<ScreenWithActionSheetProps> = ({
  children,
  onClose,
  loading,
  scrollEnabled = true,
  animateOnMount = true,
  contentContainerStyle,
  handleStyle,
  enableContentPanningGesture = false,
  showPatientInfo,
  showBackBtn,
}) => {
  const { records } = useStores()

  const { patients, recordMedCards } = records
  const { currentPatient } = patients
  const { currentMedCard } = recordMedCards

  const sheetRef = useRef<BottomSheet>(null)

  const patientInfo = useMemo(() => {
    if (currentPatient && currentMedCard) {
      const [lastName, firstName, patronymic] = currentPatient.patient.split(" ")

      return `${lastName ? lastName : ""} ${firstName ? `${firstName[0]}.` : ""} ${
        patronymic ? `${patronymic[0]}.` : ""
      } ${currentMedCard.cardNumber}`
    }
    return ""
  }, [currentPatient, currentMedCard])

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      navigate("Home")
    }
  }

  const handleComponent = () => {
    return (
      <View style={$handle}>
        <View style={$handleLine} />
        <View style={$patientInfoRow}>
          {showBackBtn && <BackButton wrapperStyle={$backBtnWrapper} btnStyle={$backBtn} />}
          <ScreenTitle
            customText={patientInfo}
            textStyle={$patientInfoText}
            containerStyle={$patientInfo}
          />
        </View>
      </View>
    )
  }

  const renderContent = () => {
    if (scrollEnabled) {
      return (
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[$contentContainer, contentContainerStyle]}
        >
          {loading ? <Preloader style={$preloader} /> : children}
        </BottomSheetScrollView>
      )
    }
    return (
      <View style={[$root, contentContainerStyle]}>
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
        animateOnMount={animateOnMount}
        handleStyle={handleStyle}
        enableContentPanningGesture={enableContentPanningGesture}
        handleComponent={showPatientInfo && currentPatient && currentMedCard && handleComponent}
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
const $handle: ViewStyle = {
  alignItems: "center",
  paddingTop: 10,
  paddingHorizontal: spacing.small,
  borderBottomColor: "#DEDEDE",
  borderBottomWidth: 1,
}
const $patientInfoRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: spacing.small,
}
const $patientInfo: ViewStyle = {
  flex: 1,
  marginBottom: 0,
}
const $patientInfoText: TextStyle = {
  fontSize: 20,
}
const $handleLine: ViewStyle = {
  width: 30,
  height: 4,
  backgroundColor: "rgba(0,0,0, 0.75)",
  borderRadius: 10,
}
const $backBtn: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
  marginRight: spacing.extraSmall,
}
const $backBtnWrapper: ViewStyle = {
  paddingVertical: 0,
}
