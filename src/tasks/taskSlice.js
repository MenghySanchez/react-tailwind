import { createSlice } from "@reduxjs/toolkit";

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
    addTask: (state, action) => {
      // metodo para agregar la tarea
      state.push(action.payload);
      /**
       *  [...state, action.payload]
       * la linea anterior es la forma como tradicionalmente se agrega
       * un elemento con react, sin embargo para comprension mas simple desde js
       * usamo la funcion push , asi es mas sencillo entender que estamos
       * cargado un bloque de info
       */
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      console.log(taskFound);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
