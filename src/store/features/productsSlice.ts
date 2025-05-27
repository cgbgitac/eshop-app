import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductCategory } from '@/types/product';

interface ProductsState {
  items: Product[];
  searchQuery: string;
  filteredItems: Product[];
  selectedCategory: ProductCategory | null;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: 'relevance' | 'price_low_to_high' | 'price_high_to_low' | 'newest';
  filters: {
    categories: ProductCategory[];
    brands: string[];
    priceRanges: Array<{ min: number; max: number }>;
    ratings: number[];
  };
}

const initialState: ProductsState = {
  items: [],
  searchQuery: '',
  filteredItems: [],
  selectedCategory: null,
  priceRange: {
    min: 0,
    max: Infinity,
  },
  sortBy: 'relevance',
  filters: {
    categories: [],
    brands: [],
    priceRanges: [],
    ratings: [],
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = applyFilters(state);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredItems = applyFilters(state);
    },
    setSelectedCategory: (state, action: PayloadAction<ProductCategory | null>) => {
      state.selectedCategory = action.payload;
      state.filteredItems = applyFilters(state);
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
      state.filteredItems = applyFilters(state);
    },
    setSortBy: (state, action: PayloadAction<ProductsState['sortBy']>) => {
      state.sortBy = action.payload;
      state.filteredItems = applyFilters(state);
    },
    setFilters: (state, action: PayloadAction<Partial<ProductsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredItems = applyFilters(state);
    },
    clearAllFilters: (state) => {
      state.selectedCategory = initialState.selectedCategory;
      state.priceRange = initialState.priceRange;
      state.sortBy = initialState.sortBy;
      state.filters = initialState.filters;
      state.filteredItems = state.items;
    },
  },
});

// Helper function to apply all filters
const applyFilters = (state: ProductsState): Product[] => {
  let filtered = [...state.items];

  // Apply search query
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.brand && product.brand.toLowerCase().includes(query))
    );
  }

  // Apply category filter
  if (state.selectedCategory) {
    filtered = filtered.filter((product) => product.category === state.selectedCategory);
  }

  // Apply price range filter
  filtered = filtered.filter(
    (product) =>
      product.price >= state.priceRange.min && product.price <= state.priceRange.max
  );

  // Apply additional filters
  if (state.filters.categories.length > 0) {
    filtered = filtered.filter((product) =>
      state.filters.categories.includes(product.category)
    );
  }

  if (state.filters.brands.length > 0) {
    filtered = filtered.filter(
      (product) => product.brand && state.filters.brands.includes(product.brand)
    );
  }

  if (state.filters.ratings.length > 0) {
    filtered = filtered.filter((product) =>
      state.filters.ratings.includes(Math.floor(product.rating))
    );
  }

  // Apply sorting
  switch (state.sortBy) {
    case 'price_low_to_high':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price_high_to_low':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      // For relevance, we'll keep the order based on search match if there's a query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered.sort((a, b) => {
          const aScore = getRelevanceScore(a, query);
          const bScore = getRelevanceScore(b, query);
          return bScore - aScore;
        });
      }
  }

  return filtered;
};

// Helper function to calculate relevance score
const getRelevanceScore = (product: Product, query: string): number => {
  let score = 0;
  
  // Exact name match gets highest score
  if (product.name.toLowerCase() === query) score += 100;
  // Name starts with query
  if (product.name.toLowerCase().startsWith(query)) score += 50;
  // Name contains query
  if (product.name.toLowerCase().includes(query)) score += 25;
  // Brand match
  if (product.brand?.toLowerCase().includes(query)) score += 20;
  // Category match
  if (product.category.toLowerCase().includes(query)) score += 15;
  // Description match
  if (product.description.toLowerCase().includes(query)) score += 10;
  // Featured products get a boost
  if (product.isFeatured) score += 5;
  // Higher rated products get a small boost
  score += product.rating;

  return score;
};

export const {
  setProducts,
  setSearchQuery,
  setSelectedCategory,
  setPriceRange,
  setSortBy,
  setFilters,
  clearAllFilters,
} = productsSlice.actions;

export default productsSlice.reducer; 