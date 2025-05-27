'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  ArrowRight,
  Mail,
  Clock
} from 'lucide-react';

export default function CheckoutSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear cart after successful checkout
    // You would typically dispatch a clearCart action here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your order has been successfully placed and is being processed.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-blue-600" />
                <span className="text-gray-900">Order #12345</span>
              </div>
              <span className="text-sm text-gray-500">Placed on {new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>A confirmation email has been sent to your email address.</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>Estimated delivery: 3-5 business days</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/orders"
              className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Order Status
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Package className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We'll start processing your order right away.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Shipping Updates</h3>
                <p className="text-sm text-gray-600">
                  You'll receive shipping updates via email.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Order Confirmation</h3>
                <p className="text-sm text-gray-600">
                  Check your email for order details and tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 