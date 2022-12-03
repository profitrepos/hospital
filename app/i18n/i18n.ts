import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ru, { Translations } from "./ru"
import kz from "./kz"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    kz: {
      translation: kz,
    },
  },
  compatibilityJSON: "v3",
  lng: "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false, // https://www.i18next.com/translation-function/interpolation#unescape
  },
})

export type TxKeyPath = RecursiveKeyOf<Translations>

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text
