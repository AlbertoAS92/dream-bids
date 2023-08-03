import { BiMap } from 'react-icons/bi';

export const CarDescription = ({}: any) => {
  return (
    <div>
      <p className="text-lg font-semibold">Honda Civic Type R (EJ9)</p>
      <p>Some extra relevant information</p>
      <div className="flex items-center gap-1 text-gray-500 font-semibold text-sm">
        <BiMap />
        <p>Wrocław, 53-424, Poland</p>
      </div>
    </div>
  );
};
