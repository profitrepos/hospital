import React, { FC, useCallback, useState } from "react"
import { observer } from "mobx-react-lite"
import { BackHandler, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../navigators"
import { Button, Screen } from "../components/ui"
import PINCode from "@haskkor/react-native-pincode"
import { COLORS } from "../theme"
import { useFocusEffect } from "@react-navigation/native"
import { FingerPrint } from "../components/svg"
import { useStores } from "../store"
import { TxKeyPath, useTranslate } from "../i18n"
import { AppError, AppModal } from "../components"

export const ResetPasswordScreen: FC<StackScreenProps<AppStackParamList, "ResetPassword">> =
  observer(function ResetPasswordScreen({ navigation }) {
    const translate = useTranslate()
    const { app } = useStores()
    const { savePincode, resetPassword, pincode, error, clearError } = app
    const [pinStatus, setPinStatus] = useState<"enter" | "choose">("enter")

    useFocusEffect(
      useCallback(() => {
        return () => {
          setPinStatus("enter")
        }
      }, []),
    )

    const setNewPinCode = async (code: string) => {
      if (pinStatus === "enter") {
        setPinStatus("choose")
      } else {
        savePincode(code)
        navigation.goBack()
      }
    }

    const renderResetButton = () => (
      <View style={$footer}>
        <Button onPress={resetPassword} tx={"pincode.resetPwd"} />
      </View>
    )

    const renderLeftComponent = (launchTouchID: () => Promise<void>) => {
      return (
        <TouchableOpacity onPress={launchTouchID} style={$fingerBtn}>
          <FingerPrint width={40} height={40} />
        </TouchableOpacity>
      )
    }

    if (error) {
      return (
        <AppModal>
          <AppError closeError={clearError} subtitle={error as TxKeyPath} />
        </AppModal>
      )
    }

    return (
      <Screen style={$root} preset="scroll">
        <PINCode
          status={pinStatus}
          buttonDeleteText={translate("pincode.delete")}
          titleChoose={translate("pincode.invent")}
          subtitleChoose=" "
          subtitleEnter=" "
          titleEnter={translate("pincode.enter")}
          titleConfirm={translate("pincode.repeat")}
          titleConfirmFailed={translate("pincode.fail")}
          subtitleError={translate("pincode.again")}
          titleAttemptFailed={translate("pincode.fail")}
          titleValidationFailed={translate("pincode.unsafe")}
          touchIDSentence={translate("pincode.login")}
          textButtonLockedPage={translate("pincode.exit")}
          textCancelButtonTouchID={translate("pincode.cancel")}
          textSubDescriptionLockedPage={translate("pincode.reset")}
          textTitleLockedPage=" " // Достигнуто максимальное количество попыток
          textDescriptionLockedPage={translate("pincode.lock")}
          finishProcess={setNewPinCode}
          stylePinCodeDeleteButtonText={$pincode}
          stylePinCodeColorSubtitle={COLORS.darkingBlue}
          stylePinCodeColorTitle={COLORS.darkingBlue}
          stylePinCodeDeleteButtonColorShowUnderlay={COLORS.red}
          stylePinCodeDeleteButtonColorHideUnderlay={COLORS.mainBlue}
          colorPassword={COLORS.mainBlue}
          stylePinCodeTextTitle={$pincode}
          stylePinCodeTextSubtitle={$pincode}
          delayBetweenAttempts={1000}
          onClickButtonLockedPage={BackHandler.exitApp}
          buttonComponentLockedPage={renderResetButton}
          bottomLeftComponent={pinStatus === "enter" && renderLeftComponent}
          storedPin={pincode}
        />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $footer: ViewStyle = {
  marginTop: 20,
  marginBottom: 30,
  width: "100%",
}
const $fingerBtn: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 5,
}
const $pincode: TextStyle = {
  fontFamily: "Gilroy-Medium",
}
