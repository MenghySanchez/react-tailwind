import React from "react";

import { useSelector } from "react-redux";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <div>
      {tasks.map((task => (
        <div key =  {task.id}>
          <h2>{task.title}</h2>
          <p> {task.descripcion} </p>
          <p>{task.completed}</p>
        </div>
      ))}
    </div>
  );
}
