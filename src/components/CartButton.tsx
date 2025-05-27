import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/features/cartSlice';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  product: Product;
  showQuantity?: boolean;
  className?: string;
}

export default function CartButton({ product, showQuantity = true, className = '' }: CartButtonProps) {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        ...product,
        quantity: 1
      }));
    }
  };

  return (
    <div className={`relative ${className}`}>
      {product ? (
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors`}
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      ) : (
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <ShoppingCart className="w-6 h-6" />
          {showQuantity && totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </button>
      )}
    </div>
  );
} 