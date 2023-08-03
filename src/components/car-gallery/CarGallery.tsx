import { CounterBid } from '../counter-bid/CounterBid';
import { Button } from '../button/Button';
import { useTranslation } from 'react-i18next';

export const CarGallery = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="pb-5">
        <p className="text-2xl font-semibold">Honda Civic Type R (EJ9)</p>
        <p className="text-lg">Some extra relevant information</p>
      </div>

      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2">
          <img
            className="rounded-sm h-[600px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
        </div>
        <div className="grid grid-cols-2 gap-1 h-[400px]">
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
          <img
            className="rounded-sm h-[147px]"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/articles/honda-civic-type-r-53a988f40c0bb.jpg"
            alt="Dinosaur"
          />
        </div>
      </div>

      <div className="pt-4 grid grid-cols-3 gap-10">
        <div className="col-span-2 flex items-center gap-3 w-full">
          <CounterBid extended={true} />
          <Button text={t('text.placeBid')} />
        </div>
        <div>Other</div>
      </div>
    </div>
  );
};
