import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../tasks/taskSlice";
import { Link } from "react-router-dom";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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
