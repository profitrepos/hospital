const ru = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  homeMenu: {
    patients: "Пациенты",
    consultations: "Консультации",
    emergencyRoom: "Приемный покой",
    settings: "Настройки",
  },
  authScreen: {
    title: "Вход в приложение",
    placeholder: "Укажите ваш номер телефона",
    next: "Далее",
  },
  otpScreen: {
    smsConfirm: "SMS-подтверждение",
    note: "Мы отправили на Ваш телефон SMS c кодом. Введите его в поле",
    repeatWithoutTime: "Отправить повторно",
    otpScreenWithTime: "Отправить повторно - %{minutes}м %{seconds}с",
    "1": "Ошибка с кодом 1",
    "2": "Ошибка с кодом 2",
  },
  errorScreen: {
    reset: "Перезагрузить приложение",
  },
}

export default ru
export type Translations = typeof ru
