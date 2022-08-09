import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../tasks/taskSlice";
import { Link } from "react-router-dom";

export default function TaskList() {
  /* Getting the tasks from the Redux store. */
  const tasks = useSelector((state) => state.tasks);
  /* A hook that gives us access to the dispatch function. */
  const dispatch = useDispatch();

  /**
   * The handleDelete function takes an id as an argument and dispatches the deleteTask action with the
   * id as an argument.
   * @param id - the id of the task to be deleted
   */
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-3">
        <h1 className="font-bold" >Actividades ({tasks.length})</h1>
        <Link to="/create-task" 
          className="
            bg-indigo-600
            hover:bg-indigo-700 
            focus:ring-indigo-500 
            focus:ring-offset-indigo-200 
            text-white 
              transition ease-in duration-200 text-center 
              text-xs 
              font-semibold 
              shadow-md 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              py-1 px-2 
              rounded-lg"
        >
          Crear Tarea{" "}
        </Link>
      </header>

      <div>
        <div className="grid grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              className="text-center bg-neutral-800 p-4 rounded-lg"
              key={task.id}
            >
              <header className="flex justify-between">
                <h3 className="font-semibold">{task.title}</h3>
                <div className="flex gap-2.5">
                  <button
                    className="py-1 px-2   
                  bg-red-600 
                  hover:bg-red-700 
                  focus:ring-red-500 
                  focus:ring-offset-indigo-200 
                  text-white 
                    w-full 
                    transition ease-in duration-200 text-center 
                    text-xs font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={() => handleDelete(task.id)}
                  >
                    Eliminar
                  </button>
                  <Link
                    className="py-1 px-2 w-full
                  bg-slate-600
                  hover:bg-slate-700
                  focus:ring-slate-500 
                  focus:ring-offset-slate-200 
                  text-white
                    transition ease-in duration-200 text-center 
                    font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs"
                    to={`/edit-task/${task.id}`}
                  >
                    Editar
                  </Link>
                </div>
              </header>
              <p className="py-3 ">{task.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
