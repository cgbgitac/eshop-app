'use client'

import { products } from '@/data/products'
import ProductCard from './ProductCard/ProductCard'

const FeaturedProducts = () => {
  // Select first 4 products as featured
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 