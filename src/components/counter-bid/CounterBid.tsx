import { useEffect, useState } from 'react';
import moment from 'moment';
import './CounterBid.css';
import { useTranslation } from 'react-i18next';
import { BsStopwatch } from 'react-icons/bs';
import { TbHammer } from 'react-icons/tb';
import { BiComment } from 'react-icons/bi';

function readableTime(timeInSeconds: number): string {
  return moment.utc(1000 * timeInSeconds).format('HH:mm:ss');
}

export const CounterBid = ({ classes = '', timeLeft, extended }: any) => {
  const { t } = useTranslation();
  const [timeSeconds, setTimeSeconds] = useState(timeLeft || 3603);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeSeconds((currentTime: number) => currentTime - 1);
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return (
    <div
      className={`${classes} CounterBid font-semibold w-full rounded-sm bg-gray-900 relative ${
        timeSeconds < 3600 ? 'CounterBid--countdown' : ''
      }`}
    >
      <div className="flex items-center gap-2 p-3 justify-around">
        <div className="flex items-center gap-2">
          <BsStopwatch className="text-xl text-gray-300" />
          <div className="w-[90px]">{readableTime(timeSeconds)}</div>
        </div>
        <p>
          <span className="text-gray-300 pr-2">{t('counterBid.maxBid')}</span>
          PLN 17,555
        </p>
        {extended && (
          <>
            <div className="flex items-center gap-2">
              <TbHammer className="text-xl text-gray-300" />
              <p>
                <span className="text-gray-300 pr-2">
                  {t('counterBid.bids')}
                </span>
                9
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BiComment className="text-xl text-gray-300" />
              <p>
                <span className="text-gray-300 pr-2">
                  {t('counterBid.comments')}
                </span>
                15
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
