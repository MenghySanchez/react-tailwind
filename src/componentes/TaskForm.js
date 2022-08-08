import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask , editTask} from "../tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //esta sera la funcion que me permitira disparar eventos desde el slice

  const params = useParams();
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id){
      dispatch(editTask(task))
    }else{
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        value = {task.title}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <textarea
        name="descripcion"
        className="textarea textarea-primary"
        placeholder="Bio"
        onChange={handleChange}
        value = {task.descripcion}
      />

      <button className="btn btn-outline btn-primary">Salvar</button>
    </form>
  );
}
