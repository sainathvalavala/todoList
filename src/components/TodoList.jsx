import React, { useState } from "react";

function TodoList() {
  var [todos, setTodos] = useState([
    "book ticket",
    "plan cricket",
    "go to gym",
  ]);
  function getTodo() {
    let ntd = document.getElementById("d1").value;
    setTodos([...todos, ntd]);
  }
  function update(){
     let utd = document.getElementById("d1");
     utd.innerText=prompt("");
  }
  return (
    <div>
      <input type="text" id="d1"></input>
      <button onClick={getTodo}>Add Todo</button>
      <ul>
        {todos.map((x) => {
          return <li>{x} <button onClick={update}>Update</button> <button>Delete</button></li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
