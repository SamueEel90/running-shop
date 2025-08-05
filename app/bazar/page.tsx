import clientPromise from "@/lib/mongodb";
import BazarFormRedirect from "./components/BazarFormRedirect";
import BazarProductCard from "./components/BazarProductCard";
import CategoryPresentation from "../shared/components/CategoryPresentation";

interface BazaarProduct {
  _id: string;
 title: string;
  description: string;
  price: number;
  image?: string;
  createdAt: Date;
}
export default async function BazarPage() {
  const client = await clientPromise;
  const db = client.db("RunningShopDB");
  const products = await db.collection("bazaarProducts").find({}).toArray();

  // Convert MongoDB _id to string for React/Next.js compatibility
  const plainProducts = products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));
  return (
    <div className="container mx-auto p-4">
      <CategoryPresentation category="bazar" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {plainProducts.map((product: any) => (
          <BazarProductCard key={product._id} product={product} />
        ))}
            </div>
            <BazarFormRedirect />
    </div>
  );
};


