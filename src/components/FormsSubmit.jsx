import React,{ useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlice"





export const AddTodoForm=()=>{

    const [value,setValue]=useState("")
    const dispatch= useDispatch()

    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo({
            title:value,
        }))
        console.log("User has entered the "+value)
    }




    return(
        <div>
            <form onSubmit={onSubmit}>

                <input type="text" placeholder="Add todos...." value={value} onChange={(event)=>setValue(event.target.value)} />
                <button type="submit">Add</button>

            </form>
        </div>
    )
}