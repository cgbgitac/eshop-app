'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/store/features/cartSlice';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the cart button
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the wishlist button
    // Add wishlist functionality here
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4">
          <button 
            onClick={handleWishlist}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 