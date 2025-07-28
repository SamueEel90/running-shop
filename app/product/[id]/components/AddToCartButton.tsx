import { useCart } from "../../../../context/CartContext";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  stock: number;
};

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

const AddToCartButton = ({ product, quantity }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addToCart(
          {
            productId: product._id,
            title: product.title,
            price: product.price,
            image: product.image,
            stock: product.stock,
          },
          quantity
        );
        // Optionally show a toast/notification instead of alert!
        alert(`Added ${quantity} × ${product.title} to cart`);
      }}
      className="bg-caribean hover:bg-caribean-light text-white rounded-md px-6 py-3 font-semibold text-lg transition-colors w-80"
      disabled={product.stock === 0}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;