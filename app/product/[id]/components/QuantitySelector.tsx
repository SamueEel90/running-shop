import React from "react";

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onDecrease: () => void;
  onIncrease: () => void;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  min = 1,
  max = Infinity,
  onDecrease,
  onIncrease,
  className = "",
}) => {
  return (
    <div className={`flex items-center bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 ${className}`}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= min}
        className={`px-3 py-2 text-lg font-bold focus:outline-none transition-colors ${
          value <= min
            ? "text-gray-300 cursor-not-allowed"
            : "text-caribean hover:bg-caribean hover:text-white"
        }`}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        readOnly
        className="w-12 text-center bg-transparent border-0 focus:ring-0 text-lg font-semibold text-caribean"
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={onIncrease}
        disabled={value >= max}
        className={`px-3 py-2 text-lg font-bold focus:outline-none transition-colors ${
          value >= max
            ? "text-gray-300 cursor-not-allowed"
            : "text-caribean hover:bg-caribean hover:text-white"
        }`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;