import React from "react"
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import * as Animatable from "react-native-animatable"
import { isIphoneX } from "react-native-iphone-x-helper"

import { SIZES } from "../constants"

//TODO: сделать модалку

type AppModalPropsType = {
  onClose?: () => void
  children: React.ReactNode
}

const AppModal: React.FC<AppModalPropsType> = ({ onClose, children }) => {
  return (
    <View style={styles.modalWrapper}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Animatable.View
          style={styles.backdropWrapper}
          animation="fadeIn"
          easing="linear"
          duration={150}
        >
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={onClose}
          ></TouchableOpacity>
        </Animatable.View>
        <Animatable.View style={styles.box} animation="fadeInUp" easing="linear" duration={200}>
          <View style={styles.children}>{children}</View>
        </Animatable.View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalWrapper: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    top: isIphoneX() ? SIZES.statusBarHeight + 20 : SIZES.statusBarHeight,
  },
  backdropWrapper: {
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(75, 88, 97, 0.7)",
  },
  backdrop: {
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
  box: {
    position: "absolute",
    bottom: SIZES.height * 0.03,
    top: SIZES.height * 0.03,
    left: 10,
    width: SIZES.width - 20,
    zIndex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebf0fa",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
  children: {
    flex: 1,
    width: "100%",
  },
})

export default AppModal
