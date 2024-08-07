import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import BR_TRANSLATION from './translations/br.json'
import EN_TRANSLATION from './translations/en.json'

const resources = {
    "br": BR_TRANSLATION,
    "en": EN_TRANSLATION
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'br',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;