import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en_US } from 'content';

const lng = 'en';
const resources = {
    en: {
        common: en_US
    }
};

const config = {
    lng,
    resources,
    interpolation: {
        escapeValue: false
    }
};

i18n.use(initReactI18next).init(config);

export default i18n;
