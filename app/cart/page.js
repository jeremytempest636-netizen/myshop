"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-400 text-lg">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-gray-300 p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-blue-600">
                  Rp {item.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                  >
                    -
                  </button>

                  <span className="font-medium">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 p-5 bg-gray-300 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

          <div className="flex justify-between text-lg font-medium">
            <span>Total:</span>
            <span>Rp {total.toLocaleString()}</span>
          </div>

          <button
            onClick={clearCart}
            className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Clear Cart
          </button>

          <a
            href="/checkout"
            className="w-full block mt-4 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            Proceed to Checkout
          </a>
        </div>
      )}
    </div>
  );
}
