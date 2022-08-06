import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasks/taskSlice"; 
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });

  const dispatch = useDispatch() 
  //esta sera la funcion que me permitira disparar eventos desde el slice 

  const handleChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
        ...task,
        id: uuid(),
    }))
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <textarea
        name="descripcion"
        className="textarea textarea-primary"
        placeholder="Bio"
        onChange={handleChange}
      />

      <button className="btn btn-outline btn-primary" >Salvar</button>
    </form>
  );
}
