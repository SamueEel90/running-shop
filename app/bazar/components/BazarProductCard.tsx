'use client';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '../../shared/components/AddToCartButton';


const BazarProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 flex flex-col">
       <Link
        href={`/bazar/${product._id.toString()}`}
        key={product._id.toString()}
        className="w-full"
        style={{ textDecoration: 'none' }}
      >
      <div className="relative w-full h-48 bg-gray-100 rounded-t-xl overflow-hidden flex items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            width={240}
            height={192}
            className="object-contain w-full h-full"
            priority
          />
        ) : (
          <div className="text-gray-400">No Image</div>
        )}
        <span className="absolute top-2 left-2 bg-caribean-light text-xs font-semibold px-2 py-1 rounded shadow text-white">
          Used
        </span>
      </div>
      <div className="flex-1 flex flex-col p-4">
       
        <div className="flex items-center justify-between mt-4"> <h2 className="text-lg font-bold text-gray-900 truncate">{product.title}</h2>
          <span className="text-xl font-semibold text-green-600">${product.price.toFixed(2)}</span>
          
        </div>
        <AddToCartButton product={product} quantity={1} />
      </div>
      </Link>
    </div>
  );
};

export default BazarProductCard;
