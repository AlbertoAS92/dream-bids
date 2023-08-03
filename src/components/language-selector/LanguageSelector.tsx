import { SupportedLanguages } from '../../i18n';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {Object.keys(SupportedLanguages).map((language: string) => (
        <button
          onClick={onChangeLanguage.bind(this, language)}
          className={`p-2 hover:text-white ${
            i18n.resolvedLanguage === language ? 'font-bold' : 'font-normal'
          }`}
          key={language}
        >
          {SupportedLanguages[language].title}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
