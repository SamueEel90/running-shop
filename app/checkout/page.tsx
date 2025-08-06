'use client';
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, setCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
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
      <div className="max-w-lg mx-auto mt-10 rounded-2xl shadow-xl p-8 text-center bg-white-smoke border border-platinum">
        <h2 className="text-2xl font-extrabold mb-4 text-caribean">Thank you for your order!</h2>
        <p className="mb-6 text-medium-gray">Your order has been received and is being processed.</p>
        <Link href="/" className="inline-block px-6 py-2 rounded-lg bg-caribean-light text-white font-semibold shadow hover:bg-caribean hover:shadow-lg transition">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 rounded-2xl shadow-xl p-8 bg-white-smoke border border-platinum">
      <h2 className="text-3xl font-extrabold mb-6 text-caribean-light text-center tracking-wide">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-medium-gray text-center">
          Your cart is empty.{" "}
          <Link href="/" className="text-caribean hover:underline font-semibold">
            Go shopping?
          </Link>
        </p>
      ) : (
        <>
          <div className="mb-6 rounded-xl p-4 shadow border border-silver">
            <h3 className="font-semibold text-xl mb-3 text-caribean text-center tracking-wide">Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.productId} className="flex justify-between py-1 text-dark-gray">
                  <span>
                    <Image src={item.image} alt={item.title} width={50} height={50} className="inline-block mr-2" />
                    {item.title} <span className="text-caribean-light">x {item.quantity}</span>
                  </span>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 border-t border-silver pt-2 font-bold text-caribean text-lg">
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
              className="border border-silver rounded-lg px-4 py-2 bg-white-smoke text-dark-gray placeholder-dark-gray focus:border-caribean-light focus:ring-2 focus:ring-caribean-light transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              required
              className="border border-silver rounded-lg px-4 py-2 bg-white-smoke text-dark-gray placeholder-dark-gray focus:border-caribean-light focus:ring-2 focus:ring-caribean-light transition"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleChange}
              required
              className="border border-silver rounded-lg px-4 py-2 bg-white-smoke text-dark-gray placeholder-dark-gray focus:border-caribean-light focus:ring-2 focus:ring-caribean-light transition"
            />
            <textarea
              name="address"
              placeholder="Shipping Address first line"
              value={customer.address}
              onChange={handleChange}
              required
              className="border border-silver rounded-lg px-4 py-2 bg-white-smoke text-dark-gray placeholder-dark-gray focus:border-caribean-light focus:ring-2 focus:ring-caribean-light transition"
              rows={3}
            />
            <textarea
              name="address"
              placeholder="Shipping Address second line (optional)"
              value={customer.address}
              onChange={handleChange}
              className="border border-silver rounded-lg px-4 py-2 bg-white-smoke text-dark-gray placeholder-dark-gray focus:border-caribean-light focus:ring-2 focus:ring-caribean-light transition"
              rows={3}
            />
            
            <button
              type="submit"
              className="bg-caribean hover:bg-caribean-light text-white font-bold py-3 rounded-xl shadow transition disabled:opacity-50"
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