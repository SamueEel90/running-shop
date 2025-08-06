'use client';
import React, { useEffect, useState } from "react";
import DropdownCard from "./DropdownCard";

const SearchDropdown = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/getAll");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = searchTerm
    ? products.filter(product =>
        product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Callback to clear search
  const handleCardClick = () => setSearchTerm("");

  return (
    <div className="absolute top-19 z-10 w-full max-w-xs">
      <div className="w-full max-w-xs">
        <input
          type="text"
          placeholder="Hľadať..."
          className="w-full text-center text-2xl px-4 py-2 rounded-lg bg-medium-gray text-amber-50 placeholder-white-smoke focus:outline-none focus:ring-2 focus:ring-caribean transition shadow-inner"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="mt-2 max-h-60 overflow-y-auto">
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <DropdownCard
              title={product.title}
              image={product.image}
              id={product._id}
              onClick={handleCardClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDropdown;