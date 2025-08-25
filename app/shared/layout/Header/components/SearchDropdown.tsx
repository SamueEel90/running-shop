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
    <div className="relative w-80"> {/* Container with relative position */}
      <input
        type="text"
        placeholder="Hľadať..."
        className="w-full text-center text-2xl px-4 py-2 rounded-lg bg-medium-gray text-amber-50 placeholder-white-smoke focus:outline-none focus:ring-2 focus:ring-caribean transition shadow-inner"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown List */}
      {filteredProducts.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 mt-2 bg-dark-gray border border-caribean rounded-md shadow-lg max-h-60 overflow-y-auto">
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
      )}
    </div>
  );
};

export default SearchDropdown;
