// import React from "react";

// function Product(props) {
//   function addToCart() {
//     // console.log(item)
//     // console.log("Cart:", [...cart, item]);
//   }
//   return (
//     <div>
//       <div className="border-3 border-red-500">
//         <h1 className="border-2  p-3  text-center">Products</h1>
//         <div style={{ display: "flex", marginLeft: "5px" }}>
//           <ul
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <div
//                 className="flex flex-col list-none border-2 border-black p-1 m-1 text-center"
//                 // style={{
//                 //   display: "flex",
//                 //   listStyle: "none",
//                 //   flexDirection: "column",
//                 //   border: "2px solid black",
//                 //   padding: "3px",
//                 //   margin: "5px",
//                 //   cursor: "pointer",
//                 //   textAlign: "center",
//                 // }}
//               >
//                 <li>{props.product.title}</li>
//                 <li>
//                   <img
//                     src={props.product.images[0]}
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 </li>
//                 <li>price: ${props.product.price}</li>
//                 <li>rating: {props.product.rating}</li>
//                 <button
//                   onClick={() => addToCart(props.product)}
//                   className="p-1 bg-blue-500 text-white rounded-full cursor-pointer"
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </ul>
//           <Cart addToCart={addToCart} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

import React from "react";
import Cart from "./Cart";
function Product(props) {

  return (
    <div>
      <div className="border-3 border-gray-500 m-1">
        <div className="flex flex-col list-none border-2 border-black p-1 m-1 text-center basis-3xs">
          <li>{props.product.title}</li>

          <li>
            <img
              src={props.product.images[0]}
              style={{ width: "100px", height: "100px" }}
            />
          </li>

          <li>price: ${props.product.price}</li>
          <li>rating: {props.product.rating}</li>

          <button
            // onClick={() => addToCart()}
            className="p-1 bg-blue-500 text-white rounded-full cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Cart></Cart>
    </div>
  );
}

export default Product;
