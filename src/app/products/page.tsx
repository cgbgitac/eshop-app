'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Filter, 
  SlidersHorizontal, 
  ChevronDown, 
  Search,
  Star,
  X,
  Grid,
  List,
  ArrowUpDown
} from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchFilters from '@/components/Products/SearchFilters'
import { Product } from '@/types/product'
import Products from '@/components/Products/Products'

interface FilterOptions {
  priceRange: [number, number]
  rating: number | null
  inStock: boolean
  brands: string[]
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  )
} 