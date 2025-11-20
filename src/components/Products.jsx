import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h3>

      <div className="flex ml-2">
        <ul className="flex flex-wrap justify-evenly items-center">
          {products.map((x) => (
            <div key={x.id} className="m-3">
              <div
                className="flex flex-col border border-gray-400 p-3 rounded-lg shadow 
                         hover:shadow-md transition cursor-pointer text-center w-40"
              >
                <li className="font-semibold mb-2">{x.title}</li>

                <li>
                  <img
                    src={x.images[0]}
                    className="w-24 h-24 object-cover mx-auto rounded"
                  />
                </li>

                <li className="mt-2 text-gray-700">Price: ${x.price}</li>
                <li className="text-sm text-gray-500">Rating: {x.rating}</li>

                <button
                  onClick={() => addToCart(x)}
                  className="mt-3 bg-blue-600 text-white py-1 px-3 rounded 
                           hover:bg-blue-700 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </ul>

        <Cart cart={cart} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default Products;
