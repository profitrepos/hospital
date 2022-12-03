const ru = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    exit: "Выход",
  },
  homeMenu: {
    emergencyRoom: "Приемный покой",
    patients: "Пациенты",
    consultations: "Консультации",
    pager: "Пейджер",
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
    otpScreenWithTime: "Отправить повторно - {{minutes}}м {{seconds}}с",
    "1": "Ошибка с кодом 1",
    "2": "Ошибка с кодом 2",
  },
  pincode: {
    delete: "Удалить",
    invent: "Придумайте ПИН-код",
    repeat: "Повторите ПИН-код",
    enter: "Введите ПИН-код",
    fail: "Неправильный ПИН-код!",
    again: "Попробуйте еще раз",
    unsafe: "PIN-код небезопасен",
    reset: "Вы можете сбросить пароль, но тогда вам нужно будет пройти авторизацию еще раз.",
    lock: "В целях защиты вашей информации доступ на время заблокирован.\n",
    resetPwd: "Сбросить пароль",
    exit: "Выйти",
    cancel: "Войти по паролю",
    login: "Войти в приложение",
  },
  errorScreen: {
    reset: "Перезагрузить приложение",
  },
  filter: {
    current: "Текущие",
    hospitalized: "Госпитализированные",
    refusal: "Отказ",
  },
  search: {
    patientsPlaceholder: "Введите фамилию пaциента или ИИН",
  },
  emergencyRoomScreen: {
    title: "Приемное отделение",
  },
  errors: {
    network: "Ошибка сети! Попробуйте еще раз!",
  },
}

export default ru
export type Translations = typeof ru
