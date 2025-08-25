'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../../../../context/CartContext';
import QuantitySelector from '../../../../shared/components/QuantitySelector';

const CartLink = () => {
  const { cart, setQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // small delay to allow smoother hover
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cart icon (not wrapped with Link to avoid hover conflict) */}
      <div className="text-white-smoke py-1 px-4 flex flex-col items-center cursor-pointer">
        <Image src="/images/shopping-cart.png" alt="Cart" width={40} height={24} />
        <span className="mt-1 text-xs bg-caribean-light text-white rounded-full px-2 py-0.5">
          {cartCount}
        </span>
      </div>

      {/* Hover Dropdown */}
      {isOpen && cart.length > 0 && (
        <div className="absolute right-0 z-50 mt-2 bg-white w-80 rounded-xl shadow-xl p-4">
          <div className="max-h-60 overflow-y-auto divide-y divide-silver">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="grid grid-cols-[60px_1fr_auto_auto] items-center gap-2 py-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded object-cover border"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-dark-gray font-semibold text-sm">{item.title}</span>
                  <QuantitySelector
                    value={item.quantity}
                    min={1}
                    max={item.stock}
                    onDecrease={() =>
                      setQuantity(item.productId, Math.max(1, item.quantity - 1))
                    }
                    onIncrease={() =>
                      setQuantity(item.productId, Math.min(item.stock, item.quantity + 1))
                    }
                  />
                </div>
                <span className="text-caribean-light font-semibold text-sm text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-500 font-bold px-2 hover:bg-red-100 rounded transition"
                  onClick={() => removeFromCart(item.productId)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Total and checkout buttons */}
          <div className="flex justify-between items-center border-t pt-3 mt-3">
            <span className="text-dark-gray font-bold">Total:</span>
            <span className="text-glaucous font-bold">${total.toFixed(2)}</span>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <Link href="/cart">
              <button className="w-full bg-medium-gray text-white-smoke font-semibold py-2 rounded-lg hover:bg-dark-gray transition">
                View Full Cart
              </button>
            </Link>
            <Link href="/checkout">
              <button className="w-full bg-caribean text-white-smoke font-bold py-2 rounded-lg hover:bg-caribean-light transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartLink;
