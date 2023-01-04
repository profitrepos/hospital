const ru = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Назад",
    exit: "Выход",
    search: "Найти",
    updates: "Загружаются последние обновления..."
  },
  mainTabs: {
    department: "Отделение",
    patients: "Мои",
    all: "Все",
  },
  medcardTabs: {
    data: "Данные",
    records: "Мед.записи",
    journal: "Дневники",
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
    medcards: "Поиск медкарт по пациенту",
    records: "Поиск записей",
    myPatients: "Поиск моих пациентов",
    department: "Поиск по отделению",
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
    hospitalization: "Госпитализация",
  },
  journalsScreen: {
    title: "Дневники",
  },
  journalScreen: {
    title: "Дневник от {{date}}",
  },
  recordsScreen: {
    title: "Медзаписи",
    analyzes: "Результаты анализов",
    consultations: "Консультация",
    diagnosis: "Диагнозы",
    epicrises: "Эпикризы",
    extracts: "Выписки",
    initialInspections: "Первичный осмотр",
    operationProtocols: "Операции",
    research: "Результаты исследований",
    substantiations: "Обоснования диагнозов",
    filter: {
      category: "Категории",
      date: "Дата",
      reset: "Сбросить",
      apply: "Применить",
      one: "Сегодня",
      two: "Сегодня, завтра",
      three: "До 2 дней",
      six: "До 5 дней",
      eight: "До 7 дней",
      ten: "До 9 дней",
      twelve: "До 11 дней",
    },
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
    analyzesAssigned: "Анализы",
    consultationsAssigned: "Консультации",
    diets: "Диета",
    medicinesAndMixtures: "Медикаменты и смеси",
    procedures: "Процедуры",
    regimes: "Режим",
    researhAssigned: "Исследования",
    regimesAndDiets: "Режимы и диеты",
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
  regimesAndDietsScreen: {
    title: "Режимы и деты",
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
