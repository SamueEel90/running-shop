'use client';
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, setCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTimeout(() => {
      setOrderPlaced(true);
      setCart([]); 
    }, 800);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
        <p className="mb-6">Your order has been received and is being processed.</p>
        <Link href="/" className="text-caribean font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-caribean hover:underline">Go shopping?</Link></p>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.productId} className="flex justify-between py-1">
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 border-t pt-2 font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={customer.address}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2"
              rows={3}
            />
            <button
              type="submit"
              className="bg-caribean text-white font-bold py-3 rounded-xl transition hover:bg-caribean-light disabled:opacity-50"
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
}