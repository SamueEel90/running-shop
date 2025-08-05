import mongoose, { Schema, models } from "mongoose";

const BProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  image: { type: String },
  rating: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default models.BProduct || mongoose.model("BProduct", BProductSchema);