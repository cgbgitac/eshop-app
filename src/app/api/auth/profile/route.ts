import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const API_URL = 'http://localhost:3001';

// Mock user database - replace with your actual database
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123',
    name: 'John Doe',
    phone: '+1234567890',
    address: '123 Main St, City, Country'
  },
    {
    id: '2',
    email: 'aiice250609@gmail.com',
    password: '123',
    name: 'deepak',
    phone: '+1234432122',
    address: '123 Main St, City, Country'
  }
];

export async function GET() {
  try {
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const decoded = verify(token, JWT_SECRET) as { userId: string };
    const response = await fetch(`${API_URL}/users/${decoded.userId}`);
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const user = await response.json();
    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const decoded = verify(token, JWT_SECRET) as { userId: string };
    const { name, email, phone, address, currentPassword, newPassword } = await request.json();

    // Fetch current user data
    const response = await fetch(`${API_URL}/users/${decoded.userId}`);
    if (!response.ok) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const user = await response.json();

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required' },
          { status: 400 }
        );
      }

      const isValidPassword = await bcrypt.compare(currentPassword, user.password);
      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      // Hash new password
      user.password = await bcrypt.hash(newPassword, 10);
    }

    // Update user data
    const updatedUser = {
      ...user,
      name: name || user.name,
      email: email || user.email,
      phone: phone || user.phone,
      address: address || user.address
    };

    const updateResponse = await fetch(`${API_URL}/users/${decoded.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (!updateResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to update profile' },
        { status: 500 }
      );
    }

    const updated = await updateResponse.json();
    return NextResponse.json({
      id: updated.id,
      name: updated.name,
      email: updated.email,
      phone: updated.phone,
      address: updated.address
    });
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 