import { NAVIGATION_ITEMS } from './navigation.utils';
import { NavigationItem } from './navigation.model';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center gap-6">
      {NAVIGATION_ITEMS.map((navigationItem: NavigationItem) => {
        return (
          <li key={navigationItem.route}>
            <Link
              to={navigationItem.route}
              onClick={() => console.log(navigationItem)}
              className="hover:text-white"
            >
              <span className={navigationItem?.classes?.join(' ')}>
                {t(`header.${navigationItem.key}`)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
