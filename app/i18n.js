import I18n from 'react-native-i18n';
import en from '../assets/locales/en.json';
import es from '../assets/locales/es.json';

I18n.fallbacks = true;

I18n.translations = {
    en,
    es
};

export default I18n;
