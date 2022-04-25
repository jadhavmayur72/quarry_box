import React from "react";
import { useSelector } from "react-redux";

export const TotalCompleteItem = () => {

  const todos= useSelector((state)=> state.todos)
  console.log(todos.length)

  return <h3>Total Todos in the list:{todos.length  }</h3>;
};
 