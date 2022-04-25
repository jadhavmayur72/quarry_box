
import React  from "react"
import { useDispatch } from "react-redux"
import { deltethunkAsync,toggleCompleteTodoAsync } from "../redux/todoSlice"

export const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch();

    const handleCheckbox=()=>{
       console.log(id)
     
        dispatch(toggleCompleteTodoAsync({id,completed:!completed}))
    }

    const handleDelTodos=()=>{
        console.log({id})
        dispatch(deltethunkAsync({id}))
       
    }




    return(
        <div>
           <span>{id}</span>
            <input type="checkbox"  checked={completed}
            onChange={handleCheckbox}
           
            />
            <span>{title}</span>
            <button onClick={handleDelTodos}>Delete</button>

        </div>
    )
}