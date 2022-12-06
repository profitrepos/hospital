import React from "react"
import { View, StyleSheet, Image, ScrollView } from "react-native"
import { AppText, AppButton } from "./ui"
import { IMAGES, COLORS, SIZES } from "../constants"
import FeedBackForm from "./FeedBackForm"
import { TouchableOpacity } from "react-native-gesture-handler"
import AvailableMOList from "./AvailableMOList"

type AppErrorPropsType = {
  title: string
  subtitle: string
  closeError: () => void
  btnText?: string
}

//TODO: сделать ошибку

const AppError: React.FC<AppErrorPropsType> = ({
  title,
  subtitle,
  closeError,
  btnText = "Назад",
}) => {
  const [shownFeedBackForm, setshownFeedBackForm] = React.useState(false)
  const [shownAvailableMO, setShownAvailableMO] = React.useState(false)

  const openFeedbackForm = () => {
    setshownFeedBackForm(true)
  }

  const closeFeedBackModal = () => {
    setshownFeedBackForm(false)
  }

  const onPressLink = () => {
    setShownAvailableMO(true)
  }

  const closeAvailableMOList = () => {
    setShownAvailableMO(false)
  }

  const renderAvailableMOList = () => {
    if (subtitle.includes("Запись в мед.организацию прикрепления пациента недоступна")) {
      return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressLink} style={styles.alignCenter}>
          <AppText style={styles.link}>Список доступных организаций для записи на прием</AppText>
        </TouchableOpacity>
      )
    } else if (subtitle.includes("Вызов участкового врача на дом недоступен")) {
      return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressLink} style={styles.alignCenter}>
          <AppText style={styles.link}>Список доступных организаций для вызова врача</AppText>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  if (shownAvailableMO) {
    return (
      <View style={styles.content}>
        <AvailableMOList next={closeAvailableMOList} />
      </View>
    )
  }

  if (shownFeedBackForm) {
    return (
      <View style={styles.content}>
        <FeedBackForm
          handleCancel={closeFeedBackModal}
          closeModal={closeError}
          type="error-feedback"
          showModalBtn
        />
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.flexGrow}>
      <View style={styles.modalContent}>
        <View style={styles.modalBox}>
          <Image source={IMAGES.redXImg} style={styles.modalImage} />
          <AppText style={styles.modalTitle}>{title}</AppText>
          <AppText style={styles.modalSubtitle}>{subtitle}</AppText>
          {renderAvailableMOList()}
        </View>
        <View style={styles.modalFooter}>
          <AppButton style={styles.modalBtn} onPress={closeError}>
            {btnText}
          </AppButton>
          <AppButton
            style={styles.modalBtn}
            color={"rgba(46, 88, 171, 0.15)"}
            onPress={openFeedbackForm}
          >
            <AppText style={styles.mainBlue}>Сообщить об ошибке</AppText>
          </AppButton>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: SIZES.normalize(10),
    paddingTop: SIZES.normalize(15),
    flex: 1,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  modalImage: {
    width: SIZES.normalize(90),
    height: SIZES.normalize(90),
    resizeMode: "contain",
  },
  modalBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: SIZES.normalize(10),
    flex: 1,
    borderRadius: 10,
  },
  modalTitle: {
    color: COLORS.darkingBlue,
    fontSize: SIZES.normalize(18),
    fontFamily: "Gilroy-Bold",
    marginBottom: SIZES.normalize(15),
    textAlign: "center",
  },
  modalSubtitle: {
    color: COLORS.error,
    fontSize: SIZES.normalize(13),
    textAlign: "center",
    paddingHorizontal: SIZES.normalize(20),
  },
  modalFooter: {
    marginTop: SIZES.normalize(10),
  },
  modalBtn: {
    marginTop: SIZES.normalize(10),
  },
  input: {
    marginBottom: SIZES.normalize(10),
  },
  textareaWrapper: {
    marginTop: SIZES.normalize(10),
  },
  textarea: {
    paddingVertical: SIZES.normalize(10),
    height: SIZES.normalize(115),
    fontSize: SIZES.normalize(13),
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  placeholder: {
    color: COLORS.lightGray3,
    fontSize: SIZES.normalize(14),
    marginBottom: SIZES.normalize(12),
  },
  link: {
    color: COLORS.mainBlue,
    fontSize: SIZES.normalize(13),
    paddingVertical: SIZES.normalize(15),
    textAlign: "center",
    textDecorationLine: "underline",
    width: "70%",
  },
  mainBlue: { color: COLORS.mainBlue },
  alignCenter: { alignItems: "center" },
})

export default AppError
