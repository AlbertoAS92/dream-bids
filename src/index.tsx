import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import './i18n';
import Auctions from './pages/auctions/Auctions';
import SellCar from './pages/sell-car/SellCar';
import About from './pages/about/About';
import { AppRoutePath } from './utils/app.utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuctionCar } from './pages/auctions/pages/AuctionCar';

const queryClient = new QueryClient();

const AppRoutes: RouteObject[] = [
  {
    path: AppRoutePath.Auctions,
    element: <Auctions />,
    // loader: auctionsLoader(queryClient),
  },
  {
    path: `${AppRoutePath.AuctionByCar}/:carId`,
    element: <AuctionCar />,
  },
  {
    path: AppRoutePath.SellCar,
    element: <SellCar />,
  },
  {
    path: AppRoutePath.About,
    element: <About />,
  },
];

const router = createBrowserRouter(AppRoutes);

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
