import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../navigators"
import { Screen } from "../components/ui"
import PINCode from "@haskkor/react-native-pincode"
import { COLORS } from "../theme"
import { translate } from "../i18n"
import { saveString } from "../utils/storage"
import { STORAGE_KEYS } from "../interfaces/Common"

export const CreatePasswordScreen: FC<StackScreenProps<AppStackParamList, "CreatePassword">> =
  observer(function CreatePasswordScreen() {
    const handleNext = async (code: string) => {
      const result = await saveString(STORAGE_KEYS.PINCODE_KEY, code, true)
      console.log("result ---> ", result)

      if (result) {
        // console.log("NEXT....")
      }
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