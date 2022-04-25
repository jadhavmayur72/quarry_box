import React from "react";
import { useSelector } from "react-redux";

export const TotalCompleteItem = () => {

  const todos= useSelector((state)=> state.todos.filter((todo)=>todo.completed===true))
  console.log(todos.length)

  return <h3>Total complete Items:{todos.length}</h3>;
};
 