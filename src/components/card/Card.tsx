import { Children } from '../../models';

export const Card = ({ children }: Children) => {
  return (
    <div className="bg-gray-200 p-3 border border-gray-300 rounded-md w-full drop-shadow-sm">
      {children}
    </div>
  );
};
