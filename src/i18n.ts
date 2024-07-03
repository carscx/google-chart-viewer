import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enGoogleChartJSON from '@/locale/en.json'
import esGoogleChartJSON from '@/locale/es.json'

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: enGoogleChartJSON },
    es: { common: esGoogleChartJSON },
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo

  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
i18n.services.formatter.add('lowercase', (value: string) => {
  return value.toLowerCase()
})

export default i18n
