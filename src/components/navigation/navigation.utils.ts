import { NavigationItem } from './navigation.model';
import { AppRoutePath } from '../../utils/app.utils';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    key: 'auctions',
    route: AppRoutePath.Auctions,
  },
  {
    key: 'sell',
    route: AppRoutePath.SellCar,
    classes: ['Navigation-item--highlighted', 'rounded-sm'],
  },
  {
    key: 'about',
    route: AppRoutePath.About,
  },
];
