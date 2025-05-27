import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
  setSelectedCategory,
  setPriceRange,
  setSortBy,
  setFilters,
  clearAllFilters,
} from '@/store/features/productsSlice';
import { ProductCategory } from '@/types/product';
import { Star, X } from 'lucide-react';

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

const SearchFilters = () => {
  const dispatch = useDispatch();
  const { items, selectedCategory, priceRange, sortBy, filters } = useSelector(
    (state: RootState) => state.products
  );

  // Get unique brands from products
  const availableBrands = Array.from(new Set(items.map(item => item.brand).filter(Boolean) as string[]));

  // Get min and max prices from products
  const prices = items.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const handleCategoryChange = (category: ProductCategory) => {
    dispatch(setSelectedCategory(category));
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };

  const handleSortChange = (value: typeof sortBy) => {
    dispatch(setSortBy(value));
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    dispatch(setFilters({ brands: newBrands }));
  };

  const handleRatingChange = (value: number) => {
    dispatch(setFilters({ ratings: [value] }));
  };

  // Check if any filters are active
  const hasActiveFilters = 
    selectedCategory !== null ||
    priceRange.min !== 0 ||
    priceRange.max !== Infinity ||
    sortBy !== 'relevance' ||
    filters.brands.length > 0 ||
    filters.ratings.length > 0;

  const handleClearAllFilters = () => {
    dispatch(clearAllFilters());
  };

  return (
    <div className="w-64 p-4 bg-white border-r border-gray-200">
      {/* Clear All Filters Button */}
      {hasActiveFilters && (
        <div className="mb-6">
          <button
            onClick={handleClearAllFilters}
            className="flex items-center justify-center w-full py-2 px-4 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </button>
        </div>
      )}

      {/* Sort Options */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="relevance">Relevance</option>
          <option value="price_low_to_high">Price: Low to High</option>
          <option value="price_high_to_low">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mb-6">
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
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange.max)}
            placeholder="Min"
            className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => handlePriceRangeChange(priceRange.min, Number(e.target.value))}
            placeholder="Max"
            className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Brands */}
      {availableBrands.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Brands</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Ratings */}
      <div className="mb-6">
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
};

export default SearchFilters; 