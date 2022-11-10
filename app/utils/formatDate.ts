import { format, parseISO } from "date-fns"

import ru from "date-fns/locale/ru"

type Options = Parameters<typeof format>[2]

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const dateOptions = {
    ...options,
    locale: ru,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}
