import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../navigators"
import { Button, Screen, Text } from "../components/ui"
import PINCode from "@haskkor/react-native-pincode"
import { translate } from "../i18n"
import { COLORS } from "../theme"
import { loadString, remove, saveString } from "../utils/storage"
import { STORAGE_KEYS } from "../interfaces/Common"
import { useFocusEffect } from "@react-navigation/native"
import { FingerPrint } from "../components/svg"

export const ResetPasswordScreen: FC<StackScreenProps<AppStackParamList, "ResetPassword">> =
  observer(function ResetPasswordScreen({ navigation }) {
    const [pinStatus, setPinStatus] = useState<"enter" | "choose">("enter")

    // TODO: ложить в стор при закрузке (временный кода, еще в VerificationScreen)

    const [pin, setPin] = useState<string | null>(null)

    useEffect(() => {
      const getPincode = async () => {
        const pinCode = await loadString(STORAGE_KEYS.PINCODE_KEY, true)
        setPin(pinCode)
      }

      getPincode()
    }, [])

    useFocusEffect(
      React.useCallback(() => {
        return () => {
          setPinStatus("enter")
        }
      }, []),
    )

    const setNewPinCode = async (code: string) => {
      if (pinStatus === "enter") {
        setPinStatus("choose")
      } else {
        const result = await saveString(STORAGE_KEYS.PINCODE_KEY, code, true)
        console.log("result ---> ", result)

        if (result) {
          // navigation.goBack()
        }
      }
    }

    const resetPassword = async () => {
      remove(STORAGE_KEYS.PINCODE_KEY, true)
      // dispatch(logout());
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
          buttonComponentLockedPage={renderResetButton}
          bottomLeftComponent={pinStatus === "enter" && renderLeftComponent}
          storedPin={pin}
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
