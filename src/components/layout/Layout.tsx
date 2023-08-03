import { Suspense } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import './Layout.css';
import { Children } from '../../models';

export const Layout = ({ children }: Children) => {
  return (
    <div className="Layout">
      <Suspense fallback={<p>Test</p>}>
        <div>
          <Header />
          <div className="mt-20">{children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};
