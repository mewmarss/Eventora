import { twMerge } from "tailwind-merge";

interface ItemsProps {
  children: string;
  className: string;
}

const Items: React.FC<ItemsProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `bg-gray-100 rounded-md w-full p-2 cursor-pointer`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Items;
