import React from "react";

import { useSelector , useDispatch} from "react-redux";
import { deleteTask } from "../tasks/taskSlice";
import { Link } from "react-router-dom";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()


  console.log(tasks);
  const handelDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div>

<header>
  <h1> Tasks {tasks.length}</h1>
    <Link to='/create-task'>
    Create Task
    </Link>
    </header>

      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p> {task.descripcion} </p>
          <button onClick={() => handelDelete(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
