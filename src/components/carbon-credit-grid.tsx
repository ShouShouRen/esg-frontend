import CarbonCreditCard from "@/components/carbon-credit-card";

interface CarbonCreditGridProps {
  credits: {
    id: number;
    title: string;
    location: string;
    imageUrl: string;
    price: number;
  }[];
}

const CarbonCreditGrid = ({ credits }: CarbonCreditGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-0">
      {credits.length > 0 ? (
        credits.map((credit) => (
          <CarbonCreditCard
            key={credit.id}
            imageUrl={credit.imageUrl}
            price={credit.price}
            title={credit.title}
            location={credit.location}
          />
        ))
      ) : (
        <div className="col-span-full h-52 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-gray-500 text-lg">找不到匹配的項目</p>
        </div>
      )}
    </div>
  );
};

export default CarbonCreditGrid;
