import en from './en.json'
import pt from './pt.json'

export const translations = {
  en,
  pt,
}

export type Language = 'en' | 'pt'

export function getTranslation(lang: Language) {
  return translations[lang]
}

export function setLanguage(lang: Language) {
  localStorage.setItem('language', lang)
  location.reload()
}

export function getCurrentLanguage(): Language {
  return (localStorage.getItem('language') as Language) || 'en'
}
