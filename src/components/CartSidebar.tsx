
import React from 'react';
import { XCircle, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ProductType } from '../types/productTypes';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: ProductType[];
  removeItem: (productId: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  removeItem,
}) => {
  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <h2 className="text-lg font-bold">Your Cart ({cartItems.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XCircle size={24} />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <ShoppingCart size={48} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-center mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button onClick={onClose}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-blue-900 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t">
              <div className="flex justify-between py-2">
                <span>Subtotal:</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping:</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white">
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
