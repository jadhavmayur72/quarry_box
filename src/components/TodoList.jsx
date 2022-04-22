
import React from "react"
import { TodoItem } from "./TodoItem"
import { useSelector } from "react-redux"
export const TodoList=()=>{
    const todos=useSelector((state)=>state.todos)


    return(
        <div>
            {todos.map((element,i)=>{
                return(
                    <TodoItem id={element.id} title={element.title} completed={element.completed}/>
                )
            })}



        </div>
    )
}