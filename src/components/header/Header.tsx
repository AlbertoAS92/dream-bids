import './Header.css';
import Logo from '../logo/Logo';
import { useTranslation } from 'react-i18next';
import Navigation from '../navigation/Navigation';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="Header border-b-2 border-white drop-shadow-lg w-full fixed z-[100]">
      <div className="flex justify-between items-center px-4">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-20">
          <button className="py-3 px-4 bg-green-600 rounded-sm text-white hover:bg-green-700">
            {t('header.signup')}
          </button>
        </div>
      </div>
    </header>
  );
};
