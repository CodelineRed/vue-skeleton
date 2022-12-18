import { createI18n } from 'vue-i18n';
import { locales } from './i18n-locales';
import LangSwitch from '../component/partial/langswitch';

const i18n = VueI18n.createI18n({ // eslint-disable-line no-undef
    legacy: false,
    messages: Object.assign(locales),
    locale: LangSwitch.data().currentLocale,
    fallbackLocale: LangSwitch.data().fallbackLocale,
    silentFallbackWarn: true,
    silentTranslationWarn: true
});

export default i18n;
