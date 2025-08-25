'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCart } from '../../../context/CartContext';

const CartLink = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);
  return (
    <Link href="/cart" className=" text-white-smoke py-1 px-4 flex flex-col items-center">
      <Image src="/images/shopping-cart.png" alt="Cart" width={40} height={24} />
      <span className="mt-1 text-xs bg-caribean-light text-white rounded-full px-2 py-0.5">
        {cartCount}
      </span>
    </Link>
  );
};

export default CartLink;
