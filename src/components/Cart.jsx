import React from "react";

function Cart({ cartItems }) {
  //    array.reduce((accumulator, currentValue) => accumulator +currentValue,initialValue,);
  const totalPrice = cartItems.reduce((sum, Item) => sum + Item.price, 0);
  return (
    <div>
    <div className="m-3 border-2 border-blue-500 ">
      <h2 className="border-2 border-blue-500 text-center">Cart Items</h2>

      <table className="border border-gray-500 rounded-xl table-auto">
        <thead className="bg-gray-100 text-gray-700">
          <tr >
            <th className=" px-6 py-3 text-left text-sm font-semibold border-r">Title</th>
            <th className=" px-6 py-3 text-left text-sm font-semibold border-r">Price</th>
            <th className=" px-6 py-3 text-left text-sm font-semibold">Category</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((x) => (
            <tr className="border-t border-gray-200">
              <td className="px-6 py-3 text-sm text-gray-800 border-r">{x.title}</td>
              <td className=" px-6 py-3 text-sm text-gray-800 border-r">${x.price}</td>
              <td className=" px-6 py-3 text-sm text-gray-800 ">{x.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <h3>TotalPrice: ${totalPrice}</h3>
      <hr></hr>
      </div>
    </div>
  );
}

export default Cart;
