import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import ProductPageCard from './components/ProductPageCard';

interface Props {
  params: {
    id: string;
  };
}
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  stock: number;
}

export default async function ProductPage({ params }: Props) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("RunningShopDB");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="container mx-auto h- p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
      </div>
    );
  }

  const plainProduct: Product = {
    _id: product._id.toString(),
    title: product.title ?? "",
    description: product.description ?? "",
    price: product.price ?? 0,
    image: product.image ?? "",
    rating: product.rating ?? 0,
    stock: product.stock ?? 0,
  };

  return <ProductPageCard product={plainProduct} />;
}