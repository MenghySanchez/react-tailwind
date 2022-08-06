import React from "react";

import { useSelector , useDispatch} from "react-redux";
import { deleteTask } from "../tasks/taskSlice";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()


  console.log(tasks);
  const handelDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div>
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
