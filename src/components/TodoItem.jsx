
import React  from "react"
import { useDispatch } from "react-redux"
import { toogleComplete,deleteTodos } from "../redux/todoSlice"

export const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch();

    const handleCheckbox=()=>{

        dispatch(toogleComplete({id:id,completed:!completed}))
    }

    const handleDelTodos=()=>{
        dispatch(deleteTodos({id:id}))
        console.log({id})
    }




    return(
        <div>
           
            <input type="checkbox" checked={completed}
            
            onChange={handleCheckbox}
            />
            <span>{title}</span>
            <button onClick={handleDelTodos}>Delete</button>

        </div>
    )
}