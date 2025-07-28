import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  subcategory: String,
  image: String,
  rating: Number,
  stock: Number,
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);