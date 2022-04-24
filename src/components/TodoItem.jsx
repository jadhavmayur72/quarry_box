
import React  from "react"
import { useDispatch } from "react-redux"
import { toggleCompleteAsync,deltethunkAsync } from "../redux/todoSlice"

export const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch();

    const handleCheckbox=(id,completed)=>{

        dispatch(toggleCompleteAsync({id:id,completed:!completed}))
    }

    const handleDelTodos=()=>{
        dispatch(deltethunkAsync({id:id}))
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