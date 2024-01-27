import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBr from './locales/pt-BR.json'
import esEs from './locales/es-ES.json'

const defaultLanguage = 'pt-BR'

export const defaultNamespace = 'default'

export const resources = {
    'pt-BR': {
        [defaultNamespace]: ptBr,
    },
    'es-ES': {
        [defaultNamespace]: esEs,
    }

}

i18n.use(initReactI18next).init({
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
        escapeValue: false,
    },
})