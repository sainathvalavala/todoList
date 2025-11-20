import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product"; // <-- Import child component

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
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
          {products.map((product) => (
            <Product
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ul>

        <Cart cart={cart} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default Products;
