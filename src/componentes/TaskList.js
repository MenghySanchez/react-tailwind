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
    <div>
      <header>
        <h1>Actividades ({tasks.length})</h1>
        <Link to="/create-task">Crear Tarea </Link>
      </header>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <header>
              <h3>{task.title}</h3>
              <div>
                <Link to={`/edit-task/${task.id}`}>Edit</Link>
                <button onClick={() => handleDelete(task.id)}>Eliminar</button>
              </div>
            </header>
            <p>{task.descripcion}</p>
            <p>{task.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
