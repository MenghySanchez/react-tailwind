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
    addTask: (state, action) => {},
  },
});

export default taskSlice.reducer;
