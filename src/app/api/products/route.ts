import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import type { Product } from '@/types/product';

// GET /api/products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const sortBy = searchParams.get('sortBy');
    const search = searchParams.get('search');
    const brand = searchParams.get('brand');
    const rating = searchParams.get('rating');

    let filteredProducts = [...products];

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= Number(minPrice)
      );
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= Number(maxPrice)
      );
    }

    if (brand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand?.toLowerCase() === brand.toLowerCase()
      );
    }

    if (rating) {
      filteredProducts = filteredProducts.filter(
        (product) => Math.floor(product.rating) >= Number(rating)
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price_low_to_high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_high_to_low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => {
          const idA = typeof a.id === 'string' ? parseInt(a.id) : a.id;
          const idB = typeof b.id === 'string' ? parseInt(b.id) : b.id;
          return idB - idA;
        });
        break;
      default:
        // Default sorting (featured)
        filteredProducts.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
    }

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error('Error in products API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'price', 'category', 'image'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new product
    const newProduct: Product = {
      id: products.length + 1,
      name: body.name,
      description: body.description || '',
      price: body.price,
      image: body.image,
      images: body.images || [],
      category: body.category,
      rating: body.rating || 0,
      stock: body.stock || 0,
      brand: body.brand,
      features: body.features || [],
      discount: body.discount,
      isNew: body.isNew || false,
      isFeatured: body.isFeatured || false,
      originalPrice: body.originalPrice,
      reviewsCount: body.reviewsCount || 0,
      sku: body.sku,
      specifications: body.specifications || {},
      variants: body.variants || []
    };

    // In a real application, you would save this to a database
    // For now, we'll just return the new product
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 