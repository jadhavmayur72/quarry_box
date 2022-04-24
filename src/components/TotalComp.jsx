import React from "react";
import { useSelector } from "react-redux";

export const TotalCompleteItem = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h3>Total complete Items:{completedTodos.length}</h3>;
};
 