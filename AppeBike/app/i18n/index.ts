import { mergeAll } from 'ramda'
import enError from './errors/en'
import enLocale from './locales/en'
import cnError from './errors/cn'
import cnLocale from './locales/cn'

I18n.fallbacks = true

I18n.translations = {
  en: mergeAll([
    enLocale,
    enError,
  ]),
  zh: mergeAll([
    cnLocale,
    cnError,
  ]),
}

I18n.defaultLocale = 'en'

// getLanguages().then(languages => {
//   console.log(languages)
//   I18n.defaultLocale = 'cn'
// })

export default I18n
