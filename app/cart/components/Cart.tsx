'use client';
import React from "react";
import { useCart } from "../../../context/CartContext";
import QuantitySelector from "../../product/[id]/components/QuantitySelector";

const Cart: React.FC = () => {
  const { cart, setQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white max-w-xl mx-auto rounded-2xl shadow-lg p-8">
      <div className="divide-y divide-silver">
        {cart.map((item) => (
          <div
            key={item.productId}
            className="grid grid-cols-[80px_1fr_auto_auto] items-center gap-4 py-6"
          >
            <img
              src={'/fake-data/placeholderShoe.jpg'}
              alt={item.title}
              className="w-80 h-20 rounded-lg object-cover border-silver"
            />
            <div className="flex flex-col gap-2">
              <div className="text-dark-gray font-semibold">{item.title}</div>
              <div className="text-silver text-sm flex items-center gap-2">
                
                <QuantitySelector
                  value={item.quantity}
                  min={1}
                  max={item.stock}
                  onDecrease={() => setQuantity(item.productId, Math.max(1, item.quantity - 1))}
                  onIncrease={() => setQuantity(item.productId, Math.min(item.stock, item.quantity + 1))}
                />
              </div>
            </div>
            <div className="font-bold text-caribean-light text-right min-w-[70px]">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="text-red-500 font-bold text-xl px-2 hover:bg-red-50 rounded-full transition"
              onClick={() => removeFromCart(item.productId)}
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 border-t border-silver pt-4">
        <span className="text-dark-gray font-bold text-lg">Total:</span>
        <span className="text-glaucous font-bold text-lg">${total.toFixed(2)}</span>
      </div>
      <button
        className="mt-8 w-full bg-caribean text-white-smoke font-bold py-3 rounded-xl transition hover:bg-caribean-light disabled:opacity-50"
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;