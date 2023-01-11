import { format, formatDistance, formatDistanceToNow, parseISO } from "date-fns"

import ru from "date-fns/locale/ru"

type Options = Parameters<typeof format>[2]

export const formatDateFromString = (date: string, dateFormat?: string, options?: Options) => {
  const dateOptions = {
    ...options,
    locale: ru,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}

export const formatDate = (date: Date, pattern: string = "dd.MM.yyyy") => {
  return format(date, pattern)
}
export const dateDistance = (
  date: Date | number,
  baseDate: Date | number,
  options: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  } = { locale: ru },
) => {
  return formatDistance(date, baseDate, options)
}

export const dateDistanceFromNow = (
  date: Date | number,
  options: {
    includeSeconds?: boolean
    addSuffix?: boolean
    locale?: Locale
  } = { locale: ru, addSuffix: true },
) => {
  return formatDistanceToNow(date, options)
}
