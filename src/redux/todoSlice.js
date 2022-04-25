import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// get todos asynch thunk-------------------------

export const getTodosAsyunc = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    try {
      const request = await fetch("http://localhost:8001/totalTodos");
      if (request.ok) {
        const response = await request.json();
        return { response };
      }
    } catch (error) {
      console.log("found error in getAsyn thunk : ", error);
    }
  }
);

// add todos asynch thunk-------------------------

export const addTodoAsyunc = createAsyncThunk(
  "todos/addTodosAsync",
  async (payload) => {
    try {
      const req = await fetch("http://localhost:8001/totalTodos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id:payload.id, title: payload.title,completed:false }),
      });
      if (req.ok) {
        const res = await req.json();
        // console.log('addTodoAsyunc')
        console.log(res)
        return { res };
      }
    } catch (error) {
      console.log("found error in getAsyn thunk: ", error);
    }
  }
);

// toggle todos asynch thunk-------------------------

export const toggleCompleteTodoAsync= createAsyncThunk('todo/completeTodoAsync',async({payload})=>{
  console.log(payload.id)
  const response= await fetch(`http://localhost:8001/totalTodos/${payload.id}`,{
    

    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({completed:payload.completed})

  })
  if(response.ok){
    const req= await response.json();
    console.log(payload.id)
    return {req}
  }
})









export const deltethunkAsync = createAsyncThunk(
    "todos/deltethunkAsync",
    async (payload) => {
      console.log("delete",payload)
    try{
      const request= await fetch(`http://localhost:8001/totalTodos/${payload.id}`,{
          method:"DELETE",
       
         

      },
     

      
      );
      if(request.ok){
          
  
          return {id:payload.id}
      }
  
    }
    catch(error){
        console.log("delete async error:" )
    }
    }
  );

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        completed: Boolean,
      };
      state.push(newTodo);
    },

    toogleComplete: (state, action) => {
      const index = state.findIndex((todos) => todos.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    //   to load todos in api..................................
    [getTodosAsyunc.pending]: (state, action) => {
      console.log("fetching data...");
    },
    //   to get todos in api..................................
    [getTodosAsyunc.fulfilled]: (state, action) => {
      console.log("fetching data successfully...");
      return action.payload.response;
    },

    //   to add todos in api..................................
    [addTodoAsyunc.fulfilled]: (state, action) => {
      // console.log('add velues')
      // console.log(state)
      // console.log(state.length)
      //state.push(action.payload.todos);
      state=[...state, action.payload.res];
      return state;
    },

      //   to toggle todos in api..................................


      [toggleCompleteTodoAsync.fulfilled]:(state,action)=>{
        
        const index= state.findIndex((todos)=> todos.id===action.payload.totalTodos.id);
       return state[index].completed= action.payload.totalTodos.id



    
      },




    [deltethunkAsync.fulfilled]:(state,action)=>{

        return state.filter((todos) => todos.id !== action.payload.id);
     
        
    }


  },
});
export const { addTodo, toogleComplete, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
