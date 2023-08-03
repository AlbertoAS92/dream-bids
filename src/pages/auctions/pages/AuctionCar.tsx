import { Layout } from '../../../components';
import { CarGallery } from '../../../components/car-gallery/CarGallery';

export const AuctionCar = () => {
  return (
    <Layout>
      <div className="p-4">
        <CarGallery />
      </div>
    </Layout>
  );
};
