import React from "react";
import Link from "next/link";

type DropdownCardProps = {
  title: string;
  image?: string;
  id: string;
  onClick?: () => void; // optional handler
};

const DropdownCard: React.FC<DropdownCardProps> = ({ title, image, id, onClick }) => {
  // Use event handler to call onClick before navigation
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Link
      href={`/product/${id}`}
      className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg transition"
      onClick={handleClick}
      scroll={true}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-10 h-10 object-cover rounded-md"
        />
      )}
      <span className="text-amber-50 text-lg">{title}</span>
    </Link>
  );
};

export default DropdownCard;