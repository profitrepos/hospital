import { TxKeyPath } from "../i18n"

const codes = [
  "700",
  "701",
  "702",
  "703",
  "704",
  "705",
  "706",
  "707",
  "708",
  "709",
  "747",
  "750",
  "751",
  "760",
  "761",
  "762",
  "763",
  "764",
  "771",
  "775",
  "776",
  "777",
  "778",
]
const phoneRegex = /^(8|\+7)\d{3}\d{3}\d{2}\d{2}/g

interface PhoneValidationResult {
  error?: TxKeyPath
  isValid: boolean
}

export const validatePhone = (phone: string): PhoneValidationResult => {
  let error: TxKeyPath
  let isValid = true

  const code = phone.slice(-10).slice(0, 3)

  if (!phoneRegex.test(phone)) {
    error = "errors.phoneInvalid"
  }
  if (!codes.includes(code)) {
    error = "errors.phoneInvalid"
  }

  return { error, isValid }
}
