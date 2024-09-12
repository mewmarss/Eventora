import { ReactNode, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ children, text, position = "top" }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipPosition = () => {
    switch (position) {
      case "top":
        return "bottom-full mb-4 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "top-full mt-4 left-1/2 transform -translate-x-1/2";
      case "left":
        return "right-full mr-4 top-1/2 transform -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      default:
        return "bottom-full mb-4 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute px-2 py-1 text-gray-700 border bg-white rounded-md text-xs whitespace-nowrap ${getTooltipPosition()}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
