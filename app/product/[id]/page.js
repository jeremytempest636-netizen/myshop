"use client";

import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductDetailPage({ params }) {
  const { addToCart } = useCart();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-8 text-red-400 text-xl">Product not found.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={product.image}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>

      <p className="text-blue-400 text-xl mt-2">
        Rp {product.price.toLocaleString()}
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        {product.description}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}
