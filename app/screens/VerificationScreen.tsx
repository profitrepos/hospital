import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { BackHandler, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import PINCode from "@haskkor/react-native-pincode"

import { AppStackParamList } from "../navigators"
import { Screen, Button } from "../components/ui"
import { COLORS } from "../theme"
import { FingerPrint } from "../components/svg"
import { useStores } from "../store"
import { useTranslate } from "../i18n"

export const VerificationScreen: FC<StackScreenProps<AppStackParamList, "Verification">> = observer(
  function VerificationScreen({}) {
    const translate = useTranslate()
    const { resetPassword, setIsVerify, pincode } = useStores().app

    const next = () => {
      setIsVerify(true)
    }

    const renderLeftComponent = (launchTouchID: () => Promise<void>) => {
      return (
        <TouchableOpacity onPress={launchTouchID} style={$fingerBtn}>
          <FingerPrint width={40} height={40} />
        </TouchableOpacity>
      )
    }

    const renderResetButton = () => (
      <View style={$footer}>
        <Button onPress={resetPassword} tx={"pincode.resetPwd"} />
      </View>
    )

    return (
      <Screen style={$root} preset="scroll">
        <PINCode
          status="enter"
          buttonDeleteText={translate("pincode.delete")}
          subtitleChoose=" "
          subtitleEnter=" "
          titleEnter={translate("pincode.enter")}
          titleConfirmFailed={translate("pincode.fail")}
          subtitleError={translate("pincode.again")}
          textSubDescriptionLockedPage={translate("pincode.reset")}
          textTitleLockedPage=" "
          titleAttemptFailed={translate("pincode.fail")}
          textDescriptionLockedPage={translate("pincode.lock")}
          touchIDSentence={translate("pincode.login")}
          textButtonLockedPage={translate("pincode.exit")}
          textCancelButtonTouchID={translate("pincode.cancel")}
          onClickButtonLockedPage={BackHandler.exitApp}
          maxAttempts={3}
          buttonComponentLockedPage={renderResetButton}
          finishProcess={next}
          stylePinCodeDeleteButtonText={$text}
          styleLockScreenText={$text}
          styleLockScreenTitle={$text}
          styleLockScreenTextTimer={$text}
          stylePinCodeColorSubtitle={COLORS.darkingBlue}
          stylePinCodeColorTitle={COLORS.darkingBlue}
          stylePinCodeDeleteButtonColorShowUnderlay={COLORS.red}
          stylePinCodeDeleteButtonColorHideUnderlay={COLORS.mainBlue}
          colorPassword={COLORS.mainBlue}
          stylePinCodeTextTitle={$text}
          stylePinCodeTextSubtitle={$text}
          delayBetweenAttempts={1000}
          bottomLeftComponent={renderLeftComponent}
          storedPin={pincode}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const $text: TextStyle = {
  textAlign: "center",
  fontFamily: "Gilroy-Medium",
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
