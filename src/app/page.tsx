'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { 
  ShoppingCart, 
  Star, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Truck,
  Shield,
  RefreshCw,
  CreditCard,
  Heart
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/store/features/cartSlice';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import { Product } from '@/types/product';
import { setProducts } from '@/store/features/productsSlice';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        
        dispatch(setProducts(data));
        
        // Filter featured and new products
        setFeaturedProducts(data.filter((p: Product) => p.isFeatured).slice(0, 6));
        setNewProducts(data.filter((p: Product) => p.isNew).slice(0, 6));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
      count: products.filter(p => p.category === 'Electronics').length
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
      count: products.filter(p => p.category === 'Fashion').length
    },
    {
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
      count: products.filter(p => p.category === 'Home & Kitchen').length
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500',
      count: products.filter(p => p.category === 'Sports').length
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Free Shipping',
      description: 'On all orders over $50'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Payment',
      description: '100% secure payment'
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: 'Easy Returns',
      description: '30 days return policy'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Multiple Payment',
      description: 'All major cards accepted'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-blue-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 