import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialStore =  {
    todos: [{id:1, text: 'Learn Redux Toolkit'}]


}

export const todoSlice = createSlice({
    name:'todo', 
    initialStore,
    reducers: {
        addTodo: (state, action) => {
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
          state.todos = state.todos.filter(todo => todo.id !== action.payload)

        },
        updateTodo: (state, action) => {
           
         const { id, text } = action.payload;
         const todoToUpdate = state.todos.find(todo => todo.id === id);
         if (todoToUpdate) {
            
            todoToUpdate.text = text;
        }
        },

     }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer