// import React, { useEffect, useState } from "react";
// import Cart from "./Cart";

// function Products() {
//   var [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // products=[...data]
//         setProducts(data.products);
//         // console.log(products);
//       });
//   }, []);
//   // fetch("https://dummyjson.com/products")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setProducts(data.products)})

//   function Abc(x) {
//     console.log(x)
//     let ar = [];
//       ar.push(x);
//      console.log(ar)
//   }
//   return (
//     <div style={{ display: "flex", marginLeft: "5px" }}>
//       <ul
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//         }}
//       >
//         {products.map((x) => {
//           return (
//             <>
//               <div>
//                 <div
//                   style={{
//                     display: "flex",
//                     listStyle: "none",
//                     flexDirection: "column",
//                     border: "2px solid black",
//                     flexWrap: "wrap",
//                     justifyContent: "space-around",
//                     cursor: "pointer",
//                     alignItems: "center",
//                     padding: "3px",
//                     margin: "5px",
//                   }}
//                   onClick={() => {
//                     Abc(x);
//                   }}
//                 >
//                   <li>{x.title}</li>
//                   <li>
//                     <img
//                       src={x.images}
//                       style={{ width: "100px", height: "100px" }}
//                     />
//                   </li>
//                   <li> price:${x.price}</li>
//                   <li>rating:{x.rating}</li>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </ul>
//       <Cart cart={cart}>
//         <Child onClick={Abc} />
//       </Cart>
//     </div>
//   );
// }

// function Child({ Click }) {
//   return <button onClick={Click}>Add to Cart</button>;
// }

// export default Products;

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
    // console.log("Cart:", [...cart, item]);
  }

  return (
    <>
      <div className="border-3 border-red-500">
      <h1 className="border-2  p-3  text-center">Products</h1>
      <div style={{ display: "flex", marginLeft: "5px" }}>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {products.map((x) => {
            // console.log(x);
            return (
              <div>
                <div className="flex flex-col list-none border-2 border-black p-1 m-1 text-center"
                  // style={{
                  //   display: "flex",
                  //   listStyle: "none",
                  //   flexDirection: "column",
                  //   border: "2px solid black",
                  //   padding: "3px",
                  //   margin: "5px",
                  //   cursor: "pointer",
                  //   textAlign: "center",
                  // }}
                >
                  <li>{x.title}</li>
                  <li>
                    <img
                      src={x.images[0]}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </li>
                  <li>price: ${x.price}</li>
                  <li>rating: {x.rating}</li>
                  <button onClick={() => addToCart(x)} className="p-1 bg-blue-500 text-white rounded-full cursor-pointer">Add to cart</button>
                </div>
              </div>
            );
          })}
        </ul>

        <Cart cartItems={cart} />
      </div>
      </div>
    </>
  );
}

export default Products;
