'use client';
import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  productId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
};

interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>; // <-- add this line
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  getQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, hydrated]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setCart(prev => {
      const exists = prev.find(ci => ci.productId === item.productId);
      if (exists) {
        return prev.map(ci =>
          ci.productId === item.productId
            ? { ...ci, quantity: Math.min(ci.quantity + quantity, item.stock) }
            : ci
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const setQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, Math.min(item.stock, quantity)) }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const getQuantity = (productId: string) =>
    cart.find(item => item.productId === productId)?.quantity || 1;

  if (!hydrated) return null;

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, setQuantity, removeFromCart, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};