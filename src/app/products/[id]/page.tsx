'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Heart, Share2, ChevronLeft, ChevronRight, Truck, RefreshCw, Shield, Package } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/store/features/cartSlice';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import type { Product, ProductCategory } from '@/types/product';

// Helper to generate star ratings
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`h-5 w-5 ${
          i <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    );
  }
  return stars;
};

interface PageProps {
  params: {
    id: string;
  };
}

// Placeholder reviews data
const placeholderReviews = [
  { id: 1, author: 'Jane Doe', rating: 5, date: '2023-10-15', title: 'Amazing Product!', content: 'Absolutely love this product. Quality is top-notch and it exceeded my expectations.' },
  { id: 2, author: 'John Smith', rating: 4, date: '2023-10-12', title: 'Great Value', content: 'Very good for the price. Works as described. Would recommend.' },
  { id: 3, author: 'Alice B.', rating: 3, date: '2023-10-10', title: 'It\'s Okay', content: 'Decent product, but had a few minor issues. Overall, it gets the job done.' },
];

export default function ProductDetail({ params }: PageProps) {
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(params.id)) as Product | undefined;

  const productImages = product ? (product.images && product.images.length > 0 ? product.images : [product.image]) : [];

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <div className="text-center">
          <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const currentProductImage = productImages[currentImageIndex] || product.image;

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    if (product.stock === 0) return;
    
    dispatch(addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    }));
    toast.success('Added to cart!');
  };

  const relatedProducts = products
    .filter((p): p is Product => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><span>/</span></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li><span>/</span></li>
            <li className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery - Enhanced */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Vertical Thumbnails */}
              {productImages.length > 1 && (
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[450px] pr-2 py-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex-shrink-0">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0
                                  ${currentImageIndex === index ? 'ring-2 ring-blue-500 shadow-md' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <Image 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 64px, 80px"
                      />
                    </button>
                  ))}
                </div>
              )}
              {/* Main Image */}
              <div className="relative w-full aspect-[4/5] md:aspect-square rounded-lg overflow-hidden group flex-grow bg-gray-100">
                <Image
                  src={currentProductImage}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product Information - Enhanced */}
            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-500 mb-1">{product.brand || 'Brand'} - SKU: {product.sku || 'N/A'}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-600">({product.reviewsCount || placeholderReviews.length} reviews)</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                </span>
              </div>

              <div className="mb-5">
                <span className="text-3xl font-bold text-blue-600 mr-2">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description.substring(0, 150)}...</p>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-4 mb-6">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md transition"
                    disabled={product.stock === 0}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    id="quantity" 
                    min="1" 
                    max={product.stock}
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))} 
                    className="w-12 text-center py-2 border-x border-gray-300 focus:outline-none"
                    disabled={product.stock === 0}
                  />
                  <button 
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md transition"
                    disabled={product.stock === 0}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </button>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
                  <Heart className="h-5 w-5" /> Add to Wishlist
                </button>
                <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
                  <Share2 className="h-5 w-5" /> Share
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center text-gray-600">
                    <Truck className="h-7 w-7 mb-1 text-blue-500" />
                    <span className="text-xs">Fast Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-600">
                    <Shield className="h-7 w-7 mb-1 text-blue-500" />
                    <span className="text-xs">Secure Checkout</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-600">
                    <RefreshCw className="h-7 w-7 mb-1 text-blue-500" />
                    <span className="text-xs">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products - Enhanced */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 