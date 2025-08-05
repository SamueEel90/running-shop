import clientPromise from "../../lib/mongodb"; // your MongoDB connection util
import Image from "next/image";
import ProductCard from "../shared/components/ProductCard";
import CategoryPresentation from "../shared/components/CategoryPresentation"; // Assuming you have a component for category presentation
interface Props {
  params: { category: string }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const client = await clientPromise;
  const db = client.db();
  const products = await db.collection("products")
    .find({ category : category })
    .toArray();
const plainProducts = products.map(product => ({
  ...product,
  _id: product._id.toString() // zatial kvoli Next.js, aby sa _id serializovalo správne v React komponentách (ak používate MongoDB ObjectId)
}));
  return (
    <div className="container mx-auto p-4">
      <CategoryPresentation category={category} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {plainProducts.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}