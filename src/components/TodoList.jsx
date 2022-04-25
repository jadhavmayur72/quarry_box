import React, { useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { getTodosAsyunc } from "../redux/todoSlice";
import "./style/forms.css"

export const TodoList = () => {
    const dispatch= useDispatch() 
  const todos_list = useSelector((state) => state.todos);
  // console.log('Page list')
  // console.log(todos)


useEffect(()=>{
    dispatch(getTodosAsyunc())
},[dispatch])
 
  return (
    <div id="listing">
      <table>
      
          
          


          <tbody>
         
            {todos_list.map((elem,i) => {
        return (
          <TodoItem
            key={i}
            id={elem.id} 
            title={elem.title}
            completed={elem.completed}
          />
        );
      })}
           
          </tbody>

      </table>
  
    </div>
  );
};
