import React from "react";
import { Button } from "antd";

interface CarbonCreditCardProps {
  imageUrl: string;
  price: number;
  title: string;
  location: string;
}

const CarbonCreditCard: React.FC<CarbonCreditCardProps> = ({
  imageUrl,
  price,
  title,
  location,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="overflow-hidden rounded-lg shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
            <Button className="bg-primary" type="primary" size="large">
              瞭解更多
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2 flex items-center">{location}</p>
        <p className="text-primary font-bold">${price}</p>
      </div>
    </div>
  );
};

export default CarbonCreditCard;
