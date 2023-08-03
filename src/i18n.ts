import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const SupportedCodeLanguages: { [key: string]: string } = {
  English: 'en',
  Polish: 'pl',
  Spanish: 'es',
};

export const SupportedLanguages: { [key: string]: { title: string } } = {
  [SupportedCodeLanguages.English]: { title: 'English' },
  [SupportedCodeLanguages.Spanish]: { title: 'Español' },
  [SupportedCodeLanguages.Polish]: { title: 'Polski' },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  fallbackLng: SupportedCodeLanguages.English,
});

export default i18n;
