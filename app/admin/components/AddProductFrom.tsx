'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddProductFormProps {}

const AddProductForm: React.FC<AddProductFormProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    // Validate all required fields
    if (!title || !description || !price || !category || !subcategory || !rating || !stock) {
      setError("All fields are required.");
      return;
    }

    if (!image) {
      setError("Please select an image.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("rating", rating);
      formData.append("stock", stock);
      formData.append("image", image);

      const res = await fetch("/api/products/add", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess("Product added successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory("");
        setSubcategory("");
        setRating("");
        setStock("");
        setImage(null);
      } else {
        setError(data.error || "Failed to add product.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Please tell people about your product
      </h2>
      {success && <div className="text-green-600">{success}</div>}
      {error && <div className="text-red-600">{error}</div>}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
          Name
        </label>
        <input
          type="text"
          id="title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Nike Football Cleats"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your product's condition, size, brand, etc."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. 45"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={0}
          step="0.01"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
          Category
        </label>
        <input
          type="text"
          id="category"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Shoes"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="subcategory">
          Subcategory
        </label>
        <input
          type="text"
          id="subcategory"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Football"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
          Rating
        </label>
        <input
          type="number"
          id="rating"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. 4.5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min={0}
          max={5}
          step="0.1"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="stock">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. 10"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          min={0}
          step="1"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          id="image"
          className="w-full"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
          <div className="flex flex-wrap gap-2 mt-2">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-20 h-20 object-cover rounded border"
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProductForm;