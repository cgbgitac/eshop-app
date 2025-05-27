import { NextResponse } from 'next/server';
import type { CartItem } from '@/types/cart';

// In a real application, this would be stored in a database
let cart: CartItem[] = [];

// GET /api/cart
export async function GET() {
  return NextResponse.json({ items: cart });
}

// POST /api/cart
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.id || !body.quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: id and quantity' },
        { status: 400 }
      );
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === body.id);

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += body.quantity;
    } else {
      // Add new item to cart
      cart.push({
        id: body.id,
        name: body.name,
        price: body.price,
        image: body.image,
        quantity: body.quantity
      });
    }

    return NextResponse.json({ items: cart });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// PUT /api/cart
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.id || !body.quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: id and quantity' },
        { status: 400 }
      );
    }

    const itemIndex = cart.findIndex(item => item.id === body.id);

    if (itemIndex === -1) {
      return NextResponse.json(
        { error: 'Item not found in cart' },
        { status: 404 }
      );
    }

    // Update quantity
    cart[itemIndex].quantity = body.quantity;

    return NextResponse.json({ items: cart });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// DELETE /api/cart
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing required parameter: id' },
        { status: 400 }
      );
    }

    // Remove item from cart
    cart = cart.filter(item => item.id !== id);

    return NextResponse.json({ items: cart });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
} 