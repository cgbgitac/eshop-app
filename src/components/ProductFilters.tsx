import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setSelectedCategory, setPriceRange, setFilters, clearAllFilters } from '@/store/features/productsSlice';
import { ProductCategory } from '@/types/product';
import { X } from 'lucide-react';

const categories: ProductCategory[] = [
  'Electronics',
  'Fashion',
  'Books',
  'Home & Kitchen',
  'Sports',
  'Beauty',
  'Toys',
  'Automotive',
  'Health',
  'Garden'
];

export default function ProductFilters() {
  const dispatch = useDispatch();
  const { selectedCategory, priceRange, filters } = useSelector((state: RootState) => state.products);

  const handleCategoryChange = (category: ProductCategory) => {
    dispatch(setSelectedCategory(category));
  };

  const handlePriceChange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };

  const handleRatingChange = (value: number) => {
    dispatch(setFilters({ ratings: [value] }));
  };

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button
          onClick={handleClearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
        >
          <X className="w-4 h-4 mr-1" />
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => handlePriceChange(Number(e.target.value), priceRange.max)}
            placeholder="Min"
            className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => handlePriceChange(priceRange.min, Number(e.target.value))}
            placeholder="Max"
            className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((value) => (
            <label key={value} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.ratings.includes(value)}
                onChange={() => handleRatingChange(value)}
                className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                {value}+ Stars
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
} 