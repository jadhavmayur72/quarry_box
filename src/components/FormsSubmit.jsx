import React,{ useState } from "react"
import { useDispatch } from "react-redux"
// import { addTodo } from "../redux/todoSlice"
import { addTodoAsyunc } from "../redux/todoSlice"
import "./style/forms.css"




export const AddTodoForm=()=>{

    const [value,setValue]=useState("")
    const dispatch= useDispatch()

    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodoAsyunc({
            title:value,
            completed:{type:Boolean,default:false}
        }))
        console.log("User has entered the "+value)
        setValue("")
    }




    return(
        <div>
            <form onSubmit={onSubmit}>

                <input className="input_box" type="text" placeholder="Add todos...." value={value} onChange={(event)=>setValue(event.target.value)} />
                <button className="btn_submit" type="submit">Add</button>

            </form>
        </div>
    )
}