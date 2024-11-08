import { Input, Select, Button } from "antd";
import { useMediaQuery } from "react-responsive";

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  value: string[];
  setValue: (value: string[]) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  handleSearch: () => void;
  taiwanCities: { value: string; label: string }[];
}

const FilterBar = ({
  setSearchTerm,
  value,
  setValue,
  sortOrder,
  setSortOrder,
  handleSearch,
  taiwanCities,
}: FilterBarProps) => {
  const isWideScreen = useMediaQuery({ minWidth: 1280 });
  return (
    <div className="flex-row md:flex justify-center lg:justify-end items-center w-full p-4 mt-8 lg:mt-0">
      <h4 className="text-2xl pl-4 border-l-8 md:w-3/12 xl:w-2/12 font-bold border-lime-900">
        碳匯交易
      </h4>
      <Input
        className="h-10 text-lg w-full mt-4 md:mt-0 md:w-3/12 xl:w-6/12"
        placeholder="請輸入商品名稱"
        onChange={(e) => setSearchTerm(e.target.value)}
        onPressEnter={handleSearch}
      />
      <Select
        // className="ml-4 w-full md:w-3/12 xl:w-4/12 text-lg"
        className={`${
          (value.length <= 2 && isWideScreen) ||
          (value.length === 0 && !isWideScreen)
            ? "h-10"
            : ""
        } ml-0 md:ml-2 mt-4 md:mt-0 w-full md:w-3/12 xl:w-4/12 text-lg ms-0`}
        mode="multiple"
        maxCount={3}
        value={value}
        onChange={setValue}
        placeholder="請選擇地區"
        options={taiwanCities}
      />
      <Select
        className="h-10 ml-0 md:ml-2 mt-4 md:mt-0 w-full md:w-2/12 ms-0"
        value={sortOrder}
        onChange={setSortOrder}
        placeholder="排序方式"
      >
        <Select.Option value="highToLow">價格高到低</Select.Option>
        <Select.Option value="lowToHigh">價格低到高</Select.Option>
      </Select>
      <Button
        className="h-10 md-0 md:ml-2 bg-primary w-full md:w-auto mt-4 md:mt-0 flex justify-center items-center"
        type="primary"
        onClick={handleSearch}
      >
        搜尋
      </Button>
    </div>
  );
};

export default FilterBar;
