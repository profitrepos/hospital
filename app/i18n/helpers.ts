import { useTranslation } from "react-i18next"
import { TxKeyPath } from "../i18n"

export const useTranslate = () => {
  const { t } = useTranslation()
  const translate: (key: TxKeyPath) => string = t
  return translate
}
