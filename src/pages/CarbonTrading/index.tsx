const carbonCredits = [
  {
    id: 1,
    title: "台北市碳匯項目",
    location: "台北市",
    imageUrl: "https://picsum.photos/id/10/200/300",
    price: 100,
  },
  {
    id: 2,
    title: "高雄市碳匯項目",
    location: "高雄市",
    imageUrl: "https://picsum.photos/id/20/200/300",
    price: 90,
  },
  {
    id: 3,
    title: "台中市碳匯項目",
    location: "台中市",
    imageUrl: "https://picsum.photos/id/30/200/300",
    price: 95,
  },
  {
    id: 4,
    title: "花蓮縣碳匯項目",
    location: "花蓮縣",
    imageUrl: "https://picsum.photos/id/40/200/300",
    price: 85,
  },
  {
    id: 5,
    title: "宜蘭縣碳匯項目",
    location: "宜蘭縣",
    imageUrl: "https://picsum.photos/id/50/200/300",
    price: 80,
  },
  {
    id: 6,
    title: "新竹縣碳匯項目",
    location: "新竹縣",
    imageUrl: "https://picsum.photos/id/60/200/300",
    price: 75,
  },
  {
    id: 7,
    title: "苗栗縣碳匯項目",
    location: "苗栗縣",
    imageUrl: "https://picsum.photos/id/70/200/300",
    price: 70,
  },
  {
    id: 8,
    title: "彰化縣碳匯項目",
    location: "彰化縣",
    imageUrl: "https://picsum.photos/id/80/200/300",
    price: 65,
  },
  {
    id: 9,
    title: "雲林縣碳匯項目",
    location: "雲林縣",
    imageUrl: "https://picsum.photos/id/90/200/300",
    price: 60,
  },
  {
    id: 10,
    title: "嘉義縣碳匯項目",
    location: "嘉義縣",
    imageUrl: "https://picsum.photos/id/100/200/300",
    price: 55,
  },
  {
    id: 11,
    title: "南投縣碳匯項目",
    location: "南投縣",
    imageUrl: "https://picsum.photos/id/110/200/300",
    price: 50,
  },
];

import { fetchCities } from "@/api/city";
import CarbonCreditGrid from "@/components/carbonCreditGrid";
import FilterBar from "@/components/filterBar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useMemo, useState } from "react";

interface SearchParams {
  term: string;
  locations: string[];
  order: string;
}

const CarbonCredits = () => {
  const [value, setValue] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState("highToLow");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useState<SearchParams>({
    term: "",
    locations: [],
    order: "highToLow",
  });
  const [taiwanCities, setTaiwanCities] = useState<
    { id: number; label: string; value: string }[]
  >([]);

  useEffect(() => {
    fetchCities()
      .then((response) => {
        if (response.code === 200) {
          const citiesWithStringId = response.data.map(
            (city: { id: number; label: string; value: string }) => ({
              ...city,
              id: city.id.toString(),
            })
          );
          setTaiwanCities(citiesWithStringId);
          console.log("Fetched cities:", citiesWithStringId);
        } else {
          console.error("Failed to fetch cities:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const sortedAndFilteredCarbonCredits = useMemo(() => {
    const filtered = carbonCredits.filter(
      (credit) =>
        (searchParams.term === "" ||
          credit.title
            .toLowerCase()
            .includes(searchParams.term.toLowerCase())) &&
        (searchParams.locations.length === 0 ||
          searchParams.locations.includes(credit.location))
    );
    return filtered.sort((a, b) =>
      searchParams.order === "highToLow" ? b.price - a.price : a.price - b.price
    );
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({
      term: searchTerm.trim(),
      locations: value,
      order: sortOrder,
    });
  };

  return (
    <>
      <Header />
      <div className="container py-28 max-h-max">
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          value={value}
          setValue={setValue}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          handleSearch={handleSearch}
          taiwanCities={taiwanCities}
        />
        <CarbonCreditGrid credits={sortedAndFilteredCarbonCredits} />
      </div>
      <Footer />
    </>
  );
};

export default CarbonCredits;
