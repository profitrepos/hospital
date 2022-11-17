import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../navigators"
import { Screen } from "../components/ui"
import PINCode from "@haskkor/react-native-pincode"
import { COLORS } from "../theme"
import { translate } from "../i18n"

export const CreatePasswordScreen: FC<StackScreenProps<AppStackParamList, "CreatePassword">> =
  observer(function CreatePasswordScreen() {
    const handleNext = (code) => {
      console.log("code ---> ", code)

      console.log("NEEEEEEEEEEEEEEEEEEEEEEEXT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      // setIsAuth()
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
          titleEnter={translate("pincode.enter")}
          titleConfirmFailed={translate("pincode.fail")}
          subtitleError={translate("pincode.again")}
          titleAttemptFailed={translate("pincode.fail")}
          titleValidationFailed={translate("pincode.unsafe")}
          finishProcess={handleNext}
          stylePinCodeDeleteButtonText={{
            fontFamily: "Gilroy-Medium",
          }}
          stylePinCodeColorSubtitle={COLORS.darkingBlue}
          stylePinCodeColorTitle={COLORS.darkingBlue}
          stylePinCodeDeleteButtonColorShowUnderlay={COLORS.red}
          stylePinCodeDeleteButtonColorHideUnderlay={COLORS.mainBlue}
          colorPassword={COLORS.mainBlue}
          stylePinCodeTextTitle={{
            fontFamily: "Gilroy-Medium",
          }}
          stylePinCodeTextSubtitle={{
            fontFamily: "Gilroy-Medium",
          }}
          delayBetweenAttempts={1000}
          storePin={console.log}
        />
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
