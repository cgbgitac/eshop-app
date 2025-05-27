import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setProducts } from '@/store/features/productsSlice';
import ProductCard from '../ProductCard/ProductCard';
import SearchFilters from './SearchFilters';

const Products = () => {
  const dispatch = useDispatch();
  const { filteredItems, searchQuery } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Filters Sidebar */}
      <SearchFilters />

      {/* Products Grid */}
      <div className="flex-1 p-6">
        {/* Results Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {filteredItems.length} {filteredItems.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 