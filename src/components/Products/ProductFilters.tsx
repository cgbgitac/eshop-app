'use client'

import { useState } from 'react'
import { ProductCategory } from '@/types/product'

interface ProductFiltersProps {
  onFilterChange: (filters: FilterOptions) => void
  onSortChange: (sort: SortOption) => void
  minPrice: number
  maxPrice: number
}

export interface FilterOptions {
  priceRange: [number, number]
  category: ProductCategory | ''
  rating: number | null
  inStock: boolean
  searchQuery: string
}

export interface SortOption {
  field: 'price' | 'rating' | 'name' | 'stock'
  direction: 'asc' | 'desc'
}

const CATEGORIES: ProductCategory[] = [
  'Electronics',
  'Fashion',
  'Books',
  'Home & Kitchen',
  'Sports',
  'Beauty',
  'Toys',
  'Automotive',
  'Health',
  'Garden',
]

const ProductFilters = ({
  onFilterChange,
  onSortChange,
  minPrice,
  maxPrice,
}: ProductFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [minPrice, maxPrice],
    category: '',
    rating: null,
    inStock: false,
    searchQuery: '',
  })

  const [sort, setSort] = useState<SortOption>({
    field: 'name',
    direction: 'asc',
  })

  const handleFilterChange = (
    key: keyof FilterOptions,
    value: FilterOptions[keyof FilterOptions]
  ) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSortChange = (newSort: SortOption) => {
    setSort(newSort)
    onSortChange(newSort)
  }

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search Products
        </label>
        <input
          type="text"
          id="search"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Search by name or description..."
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
        />
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            className="w-24 px-2 py-1 border border-gray-300 rounded-md"
            value={filters.priceRange[0]}
            onChange={(e) =>
              handleFilterChange('priceRange', [
                Number(e.target.value),
                filters.priceRange[1],
              ])
            }
          />
          <span>to</span>
          <input
            type="number"
            className="w-24 px-2 py-1 border border-gray-300 rounded-md"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange('priceRange', [
                filters.priceRange[0],
                Number(e.target.value),
              ])
            }
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value as ProductCategory | '')}
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
          Minimum Rating
        </label>
        <select
          id="rating"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          value={filters.rating || ''}
          onChange={(e) =>
            handleFilterChange('rating', e.target.value ? Number(e.target.value) : null)
          }
        >
          <option value="">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="1">1+ Star</option>
        </select>
      </div>

      {/* In Stock */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="inStock"
          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          checked={filters.inStock}
          onChange={(e) => handleFilterChange('inStock', e.target.checked)}
        />
        <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
          In Stock Only
        </label>
      </div>

      {/* Sort */}
      <div>
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          id="sort"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          value={`${sort.field}-${sort.direction}`}
          onChange={(e) => {
            const [field, direction] = e.target.value.split('-') as [
              SortOption['field'],
              SortOption['direction']
            ]
            handleSortChange({ field, direction })
          }}
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating-desc">Rating (High to Low)</option>
          <option value="rating-asc">Rating (Low to High)</option>
          <option value="stock-desc">Stock (High to Low)</option>
          <option value="stock-asc">Stock (Low to High)</option>
        </select>
      </div>
    </div>
  )
}

export default ProductFilters 