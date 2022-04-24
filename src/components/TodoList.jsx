import React, { useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { getTodosAsyunc } from "../redux/todoSlice";

export const TodoList = () => {
    const dispatch= useDispatch() 
  const todos = useSelector((state) => state.todos);


useEffect(()=>{
    dispatch(getTodosAsyunc())
},[dispatch])
 
  return (
    <div>
      {todos.map((todo,i) => {
        return (
          <TodoItem
            key={i}
            id={todo.id} 
            title={todo.title}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};
