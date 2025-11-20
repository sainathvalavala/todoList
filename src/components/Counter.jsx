import React, { useEffect, useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);


  function inc() {
    console.log('count inc')
    setCount(count +1);
  }
  // function dec() {
  //   setCount(count - 1);
  // }
  useEffect(()=>{
    console.log('count')
    setInterval(inc,1000)
  },[])
  
  return (
    <>
      <div style={{fontSize:"50px"}}>counter:{count}</div>
      {/* <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button> */}
    </>
  );
}

export default Counter;
