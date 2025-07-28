'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '@/app/product/[id]/components/AddToCartButton';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (

    <div className="bg-white hover:shadow-caribean hover:scale-105 shadow-md rounded-xl p-2 flex flex-col items-center transition-transform  duration-200">
      <Link
        href={`/product/${product._id.toString()}`}
        key={product._id.toString()}
        className="w-full"
        style={{ textDecoration: 'none' }}
      >
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">{product.title}</h2>
        <div className="w-full h-44 relative mb-2">
          <Image
            src={
              product.image.endsWith('.jpg') || product.image.endsWith('.png')
                ? product.image
                : `${product.image}.jpg`
            }
            alt={product.title}
            fill
            className="object-contain rounded-lg "
          />
        </div>
        <div className="w-full">
          
          <p className="text-sm text-gray-600 mb-1 min-h-[40px]">{product.description}</p>
         
          <div className="flex justify-between mb-1">
            <span className="text-lg text-gray-500">Rating:</span>
            <span className="text-lg text-gray-700 font-medium">{product.rating}★</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl text-caribean-light font-bold">${product.price}</span>
            <span className="text-lg font-bold text-caribean-light">{product.stock < 1 ? 'Out of stock' : 'In stock'}</span>
          </div>
        </div>
      </Link>
      <AddToCartButton product={product} quantity={1} />
    </div>
 
  );
};

export default ProductCard;
