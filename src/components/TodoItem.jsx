
import React  from "react"
import { useDispatch } from "react-redux"
import { deltethunkAsync,toggleCompleteTodoAsync } from "../redux/todoSlice"
import "./style/forms.css"
export const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch();

    // const handleCheckbox=()=>{
    //    console.log(id)
     
    //     dispatch(toggleCompleteTodoAsync({id,completed:!completed}))
    //     completed= true
    // }

    const handleDelTodos=()=>{
        console.log({id})
        dispatch(deltethunkAsync({id}))
       
    }




    return(
        <div>
            <table>
                <tr className="table_tr">
                    <th className="table_th"> Todo No:-<span>{id}</span></th>
                    <th className="table_th"> <span>{title}</span></th>
                    <th className="table_th"> <button className="btn_delete" onClick={handleDelTodos}>Delete</button></th>
                </tr>
            </table>
          
           
            {/* <input type="checkbox"   checked={completed}
            onChange={handleCheckbox}
           
            /> */}
           
           

        </div>
    )
}