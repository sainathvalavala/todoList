  //    array.reduce((accumulator, currentValue) => accumulator +currentValue,initialValue,);
  import React from "react";

function Cart({ cart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Cart Items</h2>

     <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left font-semibold border-b">Title</th>
      <th className="px-4 py-2 text-left font-semibold border-b">Price</th>
      <th className="px-4 py-2 text-left font-semibold border-b">Category</th>
    </tr>
  </thead>

  <tbody>
    {cart.map((x) => (
      <tr key={x.id} className="odd:bg-white even:bg-gray-50">
        <td className="px-4 py-2 border-b">{x.title}</td>
        <td className="px-4 py-2 border-b">${x.price}</td>
        <td className="px-4 py-2 border-b">{x.category}</td>
      </tr>
    ))}
  </tbody>
</table>


      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
