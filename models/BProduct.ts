import mongoose, { Schema, models } from "mongoose";

const BProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.BProduct || mongoose.model("BProduct", BProductSchema);