import { Search, X, Clock, TrendingUp, Filter } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, setSelectedCategory, setFilters, clearAllFilters } from '@/store/features/productsSlice'
import { RootState } from '@/store/store'
import { ChangeEvent, useState, useEffect, useRef } from 'react'
import { ProductCategory } from '@/types/product'

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery)
  const products = useSelector((state: RootState) => state.products.items)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([])
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })

  // Get unique categories and price range from products
  const categories = Array.from(new Set(products.map(product => product.category)))
  const prices = products.map(product => product.price)
  const minPrice = Math.min(...(prices.length ? prices : [0]))
  const maxPrice = Math.max(...(prices.length ? prices : [0]))

  // Popular searches
  const popularSearches = [
    'Electronics',
    'Smartphones',
    'Laptops',
    'Headphones',
    'Gaming'
  ]

  useEffect(() => {
    // Load search history from localStorage
    const history = localStorage.getItem('searchHistory')
    if (history) {
      setSearchHistory(JSON.parse(history))
    }

    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
        setShowAdvancedSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    dispatch(setSearchQuery(query))

    if (query.trim()) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSearchSubmit = (query: string) => {
    dispatch(setSearchQuery(query))
    // Add to search history
    const newHistory = [query, ...searchHistory.filter(h => h !== query)].slice(0, 5)
    setSearchHistory(newHistory)
    localStorage.setItem('searchHistory', JSON.stringify(newHistory))
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    dispatch(setSearchQuery(''))
    dispatch(clearAllFilters())
    setShowSuggestions(false)
    setShowAdvancedSearch(false)
    setSelectedCategories([])
    setPriceRange({ min: '', max: '' })
  }

  const handleCategoryToggle = (category: ProductCategory) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(newCategories)
  }

  const applyAdvancedSearch = () => {
    // Apply category filters
    if (selectedCategories.length > 0) {
      dispatch(setFilters({ categories: selectedCategories }))
    }

    // Apply price range
    if (priceRange.min || priceRange.max) {
      const min = priceRange.min ? Number(priceRange.min) : 0
      const max = priceRange.max ? Number(priceRange.max) : Infinity
      dispatch(setFilters({ priceRanges: [{ min, max }] }))
    }

    setShowAdvancedSearch(false)
  }

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={i} className="bg-yellow-100 font-semibold">{part}</span> : 
        part
    )
  }

  return (
    <div className="relative w-full max-w-2xl" ref={searchContainerRef}>
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for products, brands and more"
          className="w-full py-2.5 pl-4 pr-20 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20"
        />
        
        <div className="absolute right-3 flex items-center space-x-2">
          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            title="Advanced Search"
          >
            <Filter className="w-5 h-5" />
          </button>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              title="Clear Search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Advanced Search Panel */}
      {showAdvancedSearch && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Advanced Search</h3>
          
          {/* Categories */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedCategories.includes(category)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Price Range</h4>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                className="w-24 p-2 text-sm border border-gray-300 rounded-md"
                min={minPrice}
                max={maxPrice}
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                className="w-24 p-2 text-sm border border-gray-300 rounded-md"
                min={minPrice}
                max={maxPrice}
              />
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={applyAdvancedSearch}
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      )}

      {/* Search Suggestions */}
      {showSuggestions && !showAdvancedSearch && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Search History */}
          {searchHistory.length > 0 && !searchQuery && (
            <div className="p-3 border-b">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">RECENT SEARCHES</h3>
              <div className="space-y-2">
                {searchHistory.map((query, index) => (
                  <div
                    key={index}
                    onClick={() => handleSearchSubmit(query)}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{query}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="p-3">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">TRENDING SEARCHES</h3>
              <div className="space-y-2">
                {popularSearches.map((query, index) => (
                  <div
                    key={index}
                    onClick={() => handleSearchSubmit(query)}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
                  >
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{query}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchQuery && products.length > 0 && (
            <div className="p-3">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">SUGGESTIONS</h3>
              <div className="space-y-2">
                {products
                  .filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .slice(0, 5)
                  .map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSearchSubmit(product.name)}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-700">
                          {highlightMatch(product.name, searchQuery)}
                        </div>
                        <div className="text-xs text-gray-500">
                          in {product.category}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar 