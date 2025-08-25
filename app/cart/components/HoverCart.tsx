'use client';
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import QuantitySelector from "../../shared/components/QuantitySelector";

const HoverCart: React.FC = () => {
  const { cart, setQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger area - can be replaced with your Cart icon */}
      <div className="cursor-pointer text-white-smoke font-bold">🛒 Cart</div>

      {/* Dropdown cart preview */}
      {isOpen && (
        <div className="absolute right-0 mt-2 z-50 bg-white max-w-md w-[360px] rounded-2xl shadow-xl p-6">
          {cart.length === 0 ? (
            <div className="text-center text-silver py-4">Your cart is empty.</div>
          ) : (
            <>
              <div className="divide-y divide-silver max-h-80 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="grid grid-cols-[60px_1fr_auto_auto] items-center gap-4 py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-60 h-16 rounded-lg object-cover border-silver"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="text-dark-gray font-semibold text-sm">{item.title}</div>
                      <QuantitySelector
                        value={item.quantity}
                        min={1}
                        max={item.stock}
                        onDecrease={() => setQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        onIncrease={() => setQuantity(item.productId, Math.min(item.stock, item.quantity + 1))}
                      />
                    </div>
                    <div className="font-bold text-caribean-light text-sm text-right min-w-[60px]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="text-red-500 font-bold text-lg px-2 hover:bg-red-50 rounded-full transition"
                      onClick={() => removeFromCart(item.productId)}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 border-t border-silver pt-3 text-dark-gray font-bold text-md">
                <span>Total:</span>
                <span className="text-glaucous">${total.toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <button
                  className="mt-4 w-full bg-caribean text-white-smoke font-bold py-2 rounded-lg hover:bg-caribean-light transition disabled:opacity-50"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HoverCart;
