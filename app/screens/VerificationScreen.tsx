import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import PINCode from "@haskkor/react-native-pincode"

import { AppStackParamList } from "../navigators"
import { Screen, Button } from "../components/ui"
import { COLORS } from "../theme"
import { FingerPrint } from "../components/svg"

export const VerificationScreen: FC<StackScreenProps<AppStackParamList, "Verification">> = observer(
  function VerificationScreen({}) {
    const localAuthHandler = () => {}

    const renderLeftComponent = () => {
      // if (supportedAuthTypes.length > 0) {
      if (true) {
        return (
          <TouchableOpacity onPress={localAuthHandler} style={$fingerBtn}>
            <FingerPrint width={40} height={40} />
          </TouchableOpacity>
        )
      }
    }

    return (
      <Screen style={$root} preset="scroll">
        <PINCode
          status="enter"
          buttonDeleteText="Удалить"
          titleChoose="Придумайте ПИН-код"
          subtitleChoose=" "
          subtitleEnter=" "
          titleConfirm="Повторите ПИН-код"
          titleEnter="Введите ПИН-код"
          titleConfirmFailed="Неправильный ПИН-код!"
          subtitleError="Попробуйте еще раз"
          textSubDescriptionLockedPage={`Вы можете сбросить пароль, но тогда вам нужно будет пройти авторизацию еще раз.`}
          textTitleLockedPage=" " //Достигнуто максимальное количество попыток
          titleAttemptFailed="Неправильный ПИН-код"
          titleValidationFailed="PIN-код небезопасен"
          textDescriptionLockedPage={`В целях защиты вашей информации доступ на время заблокирован.\n`}
          textButtonLockedPage="Выйти"
          maxAttempts={3}
          buttonComponentLockedPage={() => (
            <View style={$footer}>
              <Button onPress={() => console.log("RESET PASSWORD")}>Сбросить пароль</Button>
            </View>
          )}
          finishProcess={() => console.log("FINISH")}
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
          touchIDDisabled
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
