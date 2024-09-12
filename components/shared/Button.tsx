import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `rounded-md p-2 text-center w-full cursor-pointer hover:opacity-80 transition`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
