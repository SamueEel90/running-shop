'use client';
import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import QuantitySelector from "./QuantitySelector";
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  stock: number;
}

const ProductPageCard: React.FC<{ product: Product }> = ({ product }) => {
  const images = Array(5).fill(
    product.image.endsWith('.jpg') || product.image.endsWith('.png')
      ? product.image
      : `${product.image}.jpg`
  );
  const [mainImage, setMainImage] = useState(images[0]);
  const [count, setCount] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const handleDecrease = () => {
    setCount(prev => Math.max(1, prev - 1));
  };
  const handleIncrease = () => {
    setCount(prev => Math.min(product.stock, prev + 1));
  };

  const handleWishlist = () => {
    setWishlisted(prev => !prev);
    alert(
      `${wishlisted ? "Removed from" : "Added to"} wishlist: ${product.title}`
    );
  };

  return (
    <div className="container mx-auto p-6 max-w-8xl min-h-[700px] bg-white shadow rounded-lg mt-8 flex items-center">
      <div className="flex flex-col md:flex-row gap-8 w-full h-full">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <Image
            src={mainImage}
            alt={product.title}
            width={600}
            height={450}
            className="object-cover rounded-lg shadow w-full max-w-2xl h-auto"
            priority
          />
          <div className="flex gap-4 mt-4">
            {images.map((imgSrc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMainImage(imgSrc)}
                className={`border-2 rounded-lg overflow-hidden focus:outline-none ${mainImage === imgSrc ? 'border-caribean' : 'border-gray-300'}`}
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={60}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between h-full py-8">
          <h1 className="text-4xl text-caribean font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-glaucous mb-4">{product.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-lg text-gray-500 ml-2">
              {product.rating?.toFixed(1) ?? "0.0"} / 5
            </span>
          </div>
          <div className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price?.toFixed(2) ?? "0.00"}
          </div>
          <div className={`mb-4 font-medium ${product.stock > 0 ? "text-caribean-light" : "text-red-600"} text-lg`}>
            {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
          </div>
          <div className="flex items-center gap-4 mt-4 w-full">
            <QuantitySelector
              value={count}
              min={1}
              max={product.stock}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <AddToCartButton product={product} quantity={count} />
            <button
              type="button"
              onClick={handleWishlist}
              className="ml-2 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              {wishlisted ? (
                <span role="img" aria-label="Wishlisted" className="text-caribean text-2xl">💙</span>
              ) : (
                <span role="img" aria-label="Add to wishlist" className="text-gray-500 text-2xl">🤍</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
