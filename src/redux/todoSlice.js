import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get todos asynch thunk-------------------------

export const getTodosAsyunc = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    try {
      const request = await fetch("http://localhost:8001/totalTodos");
      if (request.ok) {
        const todos = await request.json();
        return { todos };
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
        body: JSON.stringify({ title: payload.title }),
      });
      if (req.ok) {
        const res = await req.json();
        return { res };
      }
    } catch (error) {
      console.log("found error in getAsyn thunk: ", error);
    }
  }
);

// toggle todos asynch thunk-------------------------

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completedTodoAsync ",
  async (payload) => {
  try{
    const request= await fetch(`http://localhost:8001/totalTodos/`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/type",
        },
        body:JSON.stringify({completed:payload.completed})
    }
    
    );
    if(request.ok){
        const response= await request.json()
        return {id:response.id,completed:response.completed}
        // return {id:response.id ,completed:response.completed}
    }

  }
  catch(error){
      console.log("toggle async error:" )
  }
  }
);






export const deltethunkAsync = createAsyncThunk(
    "todos/deltethunkAsync",
    async (payload) => {
    try{
      const request= await fetch(`http://localhost:8001/totalTodos/${payload.id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/type",
        },
         
          body:JSON.stringify()
      },
     

      
      );
      if(request.ok){
          const response= await request.json()
  
          return response
      }
  
    }
    catch(error){
        console.log("delete async error:" )
    }
    }
  );

const todoSlice = createSlice({
  name: "todos",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
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
      return action.payload.todos;
    },

    //   to add todos in api..................................
    [addTodoAsyunc.fulfilled]: (state, action) => {
      state.push(action.payload.todos);
    },

      //   to toggle todos in api..................................

    [toggleCompleteAsync.fulfilled]:(state,action)=>{

        const index = state.findIndex((todos) => todos.id === action.payload.id);
        state[index].completed = action.payload.completed;
      },


    [deltethunkAsync.fulfilled]:(state,action)=>{

        return state.filter((todos) => todos.id !== action.payload.id);
    }


  },
});
export const { addTodo, toogleComplete, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
