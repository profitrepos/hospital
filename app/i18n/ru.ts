const ru = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Назад",
    exit: "Выход",
    search: "Найти",
  },
  mainTabs: {
    department: "Отделение",
    patients: "Пациенты",
    all: "Все",
  },
  medcardTabs: {
    data: "Данные",
    records: "Мед.записи",
    journal: "Дневник",
    assignments: "Назначения",
    more: "Еще",
  },
  authScreen: {
    title: "Вход в приложение",
    phone: "Укажите ваш номер телефона",
    iin: "Введите ИИН",
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
    medcards: "Поиск",
  },
  departmentScreen: {
    title: "Приемное отделение",
  },
  patientsSreen: {
    title: "Мои пациенты",
  },
  searchScreen: {
    title: "Пациенты больницы",
  },
  errors: {
    common: "Ошибка!",
    network: "Ошибка сети! Попробуйте еще раз!",
    phoneCode: "Введенный номер не является телефоном сотовых операторов РК!",
    phoneInvalid: "Некорректый номер телефона",
    unknown: "Неизвестная ошибка",
  },
  selectOrganizationScreen: {
    title: "Выберите организацию",
  },
  patientDataScreen: {
    IIN: "ИИН",
    birthDate: "Дата рождения",
    gender: "Пол",
    age: "Возраст",
    address: "Адрес",
    allergy: "Аллергоанамнез",
    ward: "Палата",
    doctor: "Леч.врач",
    admissionDate: "Дата госпитализации",
    cardNumber: "Номер мед.карты",
    diagnosis: "Диагноз",
    department: "Отделение госпитализации",
  },
  journalsScreen: {
    title: "Дневники",
  },
  journalScreen: {
    title: "Дневник",
  },
  recordsScreen: {
    title: "Медзаписи",
  },
  analysisRecordsScreen: {
    title: "Анализы",
  },
  consultationRecordsScreen: {
    title: "Консультации",
  },
  diagnosisRecordsScreen: {
    title: "Диагнозы",
  },
  epicrisisRecordsScreen: {
    title: "Эпикризы",
  },
  extractRecordsScreen: {
    title: "Выписки",
  },
  initialInspectionRecordsScreen: {
    title: "Первичные осмотры",
  },
  operationProtocolRecordsScreen: {
    title: "Протоколы операций",
  },
  researchRecordsScreen: {
    title: "Исследования",
  },
  substantiationRecordsScreen: {
    title: "Обоснования диагнозов",
  },
  assignmentsScreen: {
    title: "Назначения",
  },
  medicinesAndMixturesScreen: {
    title: "Медикаменты и смеси",
  },
  analyzesAssignedScreen: {
    title: "Анализы",
  },
  researhAssignedScreen: {
    title: "Исследования",
  },
  consultationsAssignedScreen: {
    title: "Консультация",
  },
  regimesScreen: {
    title: "Режим",
  },
  dietsScreen: {
    title: "Диета",
  },
  proceduresScreen: {
    title: "Процедуры",
  },
}

export default ru
export type Translations = typeof ru
