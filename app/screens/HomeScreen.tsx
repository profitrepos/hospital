import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Button, OtpInput, Screen, Select, Tabs, TextField } from "../components/ui"
import { ConsultaionsSVG, EmergencyRoomSVG, FingerPrint, PatientsSVG } from "../components/svg"
import { IHomeMenuItem } from "../interfaces/Common"
import { GridMenu } from "../components"
import { SceneMap } from "react-native-tab-view"
import PINCode from "@haskkor/react-native-pincode"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS } from "../theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const menuList: IHomeMenuItem[] = [
  {
    title: "homeMenu.patients",
    icon: PatientsSVG,
    navigateTo: "Patients",
  },
  {
    title: "homeMenu.consultations",
    icon: ConsultaionsSVG,
    navigateTo: "Consultations",
  },
  {
    title: "homeMenu.emergencyRoom",
    icon: EmergencyRoomSVG,
    navigateTo: "EmergencyRoom",
  },
  {
    title: "homeMenu.settings",
    icon: EmergencyRoomSVG,
    navigateTo: "Settings",
  },
]

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
const ThirdRoute = () => <View style={{ flex: 1, backgroundColor: "blue" }} />

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
})

export const HomeScreen: FC<StackScreenProps<AppStackScreenProps<"Home">>> = observer(
  function HomeScreen() {
    const [first, setFirst] = useState("")

    const [routes] = React.useState([
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
      { key: "third", title: "Third" },
    ])
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen preset="scroll">
        <View style={$root}>
          {/* <Tabs renderScene={renderScene} routes={routes} /> */}
          {/* <GridMenu list={menuList} /> */}
          <PINCode
            status="enter"
            buttonDeleteText="Удалить"
            titleChoose="Придумайте новый ПИН-код"
            subtitleChoose=" "
            subtitleEnter=" "
            titleConfirm="Повторите новый ПИН-код"
            titleEnter="Введите текущий ПИН-код"
            titleConfirmFailed="Неправильный ПИН-код!"
            subtitleError="Попробуйте еще раз"
            textSubDescriptionLockedPage={`Вы можете сбросить пароль, но тогда вам нужно будет пройти авторизацию еще раз.`}
            textTitleLockedPage=" " // Достигнуто максимальное количество попыток
            titleAttemptFailed="Неправильный ПИН-код"
            titleValidationFailed="PIN-код небезопасен"
            textDescriptionLockedPage={`В целях защиты вашей информации доступ на время заблокирован.\n`}
            textButtonLockedPage="Выйти"
            maxAttempts={3}
            buttonComponentLockedPage={() => (
              <View style={$footer}>
                <Button onPress={() => {}}>Сбросить пароль</Button>
              </View>
            )}
            onClickButtonLockedPage={() => {}}
            finishProcess={() => {}}
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
            bottomLeftComponent={() => (
              <TouchableOpacity onPress={() => {}} style={$fingerBtn}>
                <FingerPrint width={40} height={40} />
              </TouchableOpacity>
            )}
            touchIDDisabled
          />
          <TextField secureType value={first} onChangeText={setFirst} />
        </View>
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
//TODO: сделать компоненты Работа с файловой системой, Пин код и отпечаток
