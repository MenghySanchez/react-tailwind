import { createSlice } from "@reduxjs/toolkit";

/* The initial state of the reducer. */
const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    completed: false,
  },
  {
    id: "2",
    title: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
   
    /* Adding a new task to the state. */
    addTask: (state, action) => {
      state.push(action.payload);
    },
    /* Finding the task with the id that is passed in the action payload and then removing it from the
    state. */
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if(taskFound){
        state.splice(state.indexOf(taskFound),1)    
      }
    },
    /* A reducer that is used to edit a task. */
    editTask:(state, action)=>{
     /* Destructuring the payload of the action and then finding the task with the id that is passed in
     the action payload. */
     const {id, title, descripcion} = action.payload
     const foundTask = state.find(task => task.id === id)
     /* Checking if the task was found and then updating the title and description of the task. */
     if(foundTask ){
      foundTask.title = title
      foundTask.descripcion =  descripcion
     }
    }
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
