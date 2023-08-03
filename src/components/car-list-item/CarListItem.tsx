import { CounterBid } from '../counter-bid/CounterBid';
import { FaRegStar } from 'react-icons/fa';
import './CarListItem.css';
import { CarDescription } from '../car-description/CarDescription';
import { Link } from 'react-router-dom';
import { AppRoutePath } from '../../utils/app.utils';

export const CarListItem = ({ carData }: any) => {
  return (
    <div className="pb-6 py-4">
      <Link to={`${AppRoutePath.AuctionByCar}/23`}>
        <div className="bg-gray-300 w-[400px] cursor-pointer rounded-sm">
          <div className="CarListItem relative rounded-sm">
            <div className="CarListItem-overlay"></div>
            <img
              className="rounded-sm"
              src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
              alt="Dinosaur"
            />
            <div className="CarListItem-starred hidden">
              <FaRegStar />
            </div>
          </div>
        </div>
      </Link>
      <CounterBid />
      <CarDescription />
    </div>
  );
};
