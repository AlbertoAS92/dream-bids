import './Button.css';

export const Button = ({ text, type }: any) => {
  return (
    <button
      className="CustomButton bg-gray-900 py-3 px-4 rounded-sm hover:text-white"
      type={type || 'button'}
    >
      {text || 'Button'}
    </button>
  );
};
