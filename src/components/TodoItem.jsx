


export const TodoItem=({id,title,completed})=>{





    return(
        <div>

            <input type="checkbox" checked={completed} />
            <button>Delete</button>

        </div>
    )
}