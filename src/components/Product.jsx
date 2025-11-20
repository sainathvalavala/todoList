// Product.jsx
import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="m-3">
      <div
        className="flex flex-col border border-gray-400 p-3 rounded-lg shadow 
        hover:shadow-md transition cursor-pointer text-center w-40"
      >
        <li className="font-semibold mb-2">{product.title}</li>

        <li>
          <img
            src={product.images[0]}
            className="w-24 h-24 object-cover mx-auto rounded"
          />
        </li>

        <li className="mt-2 text-gray-700">Price: ${product.price}</li>
        <li className="text-sm text-gray-500">Rating: {product.rating}</li>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-blue-600 text-white py-1 px-3 rounded 
          hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
