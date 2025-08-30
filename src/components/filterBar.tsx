import { Button, Input, Select } from "antd";
import { MapPin, Search } from "lucide-react";

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  value: string[];
  setValue: (value: string[]) => void;
  handleSearch: () => void;
  taiwanCities: { value: string; label: string }[];
}

const FilterBar = ({
  setSearchTerm,
  value,
  setValue,
  handleSearch,
  taiwanCities,
}: FilterBarProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-6 -left-4 w-24 h-24 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute -top-8 -right-6 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-600">線上項目</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-green-500" />
              <span className="text-slate-600">即時交易</span>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-bar relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-100/50 p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-t-3xl" />

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* 搜尋輸入框 */}
            <div className="lg:col-span-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <Search className="w-4 h-4 inline-block mr-2" />
                項目搜尋
              </label>
              <div className="relative group">
                <Input
                  className="h-12 text-base rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 focus:border-emerald-500 transition-all duration-300 shadow-sm"
                  placeholder="輸入項目名稱..."
                  prefix={<Search className="w-4 h-4 text-emerald-400" />}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onPressEnter={handleSearch}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* 地區選擇 */}
            <div className="lg:col-span-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-2" />
                項目地區
              </label>
              <Select
                className="filter-select w-full"
                style={{ minHeight: "48px" }}
                mode="multiple"
                maxCount={3}
                value={value}
                onChange={setValue}
                placeholder="選擇地區..."
                options={taiwanCities}
                suffixIcon={<MapPin className="w-4 h-4 text-emerald-400" />}
              />
            </div>

            {/* 搜尋按鈕 */}
            <div className="lg:col-span-3 flex items-end">
              <Button
                className="h-12 w-full rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 border-0 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                type="primary"
                onClick={handleSearch}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Search className="w-4 h-4 relative z-10" />
                <span className="relative z-10">搜尋項目</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
