'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProductCategory } from '@/types/product';

const categories: Array<{
  name: ProductCategory;
  image: string;
  count: number;
}> = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800',
    count: 42,
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    count: 36,
  },
  {
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800',
    count: 24,
  },
  {
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
    count: 28,
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    count: 18,
  },
  {
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
    count: 22,
  },
  {
    name: 'Toys',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800',
    count: 16,
  },
  {
    name: 'Automotive',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800',
    count: 14,
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/products?category=${category.name}`}
          className="group relative h-80 rounded-xl overflow-hidden"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-white/80">{category.count} Products</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 