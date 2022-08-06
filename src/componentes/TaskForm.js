import React from "react";
import { useState } from "react";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task)

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
