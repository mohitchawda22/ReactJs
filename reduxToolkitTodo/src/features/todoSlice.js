// this is the section of code that is created to initialise the Slice section of the app.
// it will be called when the page loads and should create any necessary objects, set up event handlers etc.

import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
        },  
    }
})

export const{addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer