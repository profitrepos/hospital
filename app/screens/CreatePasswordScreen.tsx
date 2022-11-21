import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { BackHandler, TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../navigators"
import { Screen } from "../components/ui"
import PINCode from "@haskkor/react-native-pincode"
import { COLORS } from "../theme"
import { translate } from "../i18n"
import { useStores } from "../models"

export const CreatePasswordScreen: FC<StackScreenProps<AppStackParamList, "CreatePassword">> =
  observer(function CreatePasswordScreen() {
    const { finishAuth } = useStores().app

    const handleNext = (code: string) => {
      finishAuth(code)
    }

    return (
      <Screen style={$root} preset="scroll">
        <PINCode
          status="choose"
          buttonDeleteText={translate("pincode.delete")}
          titleChoose={translate("pincode.invent")}
          subtitleChoose=" "
          subtitleEnter=" "
          titleConfirm={translate("pincode.repeat")}
          titleConfirmFailed={translate("pincode.fail")}
          subtitleError={translate("pincode.again")}
          titleAttemptFailed={translate("pincode.fail")}
          titleValidationFailed={translate("pincode.unsafe")}
          textSubDescriptionLockedPage={translate("pincode.reset")}
          textTitleLockedPage=" " // Достигнуто максимальное количество попыток
          textDescriptionLockedPage={translate("pincode.lock")}
          onClickButtonLockedPage={BackHandler.exitApp}
          finishProcess={handleNext}
          stylePinCodeDeleteButtonText={$pincode}
          stylePinCodeColorSubtitle={COLORS.darkingBlue}
          stylePinCodeColorTitle={COLORS.darkingBlue}
          stylePinCodeDeleteButtonColorShowUnderlay={COLORS.red}
          stylePinCodeDeleteButtonColorHideUnderlay={COLORS.mainBlue}
          colorPassword={COLORS.mainBlue}
          stylePinCodeTextTitle={$pincode}
          stylePinCodeTextSubtitle={$pincode}
          delayBetweenAttempts={1000}
        />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $pincode: TextStyle = {
  fontFamily: "Gilroy-Medium",
}
