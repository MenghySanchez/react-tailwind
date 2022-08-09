import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask , editTask} from "../tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  /* A hook that allows you to create a state in a functional component. */
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });


  /* A hook that allows you to navigate between routes. */
  const navigate = useNavigate();
  /* A hook that allows you to dispatch actions to the store. */
  const dispatch = useDispatch();
  /* Getting the id from the url. */
  const params = useParams();
  /* Getting the tasks from the store. */
  const tasks = useSelector(state => state.tasks)

 /**
  * When the user types in the input field, the handleChange function will update the state of the task
  * object with the new value.
  * @param e - the event object
  */
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * If the task has an id, then it's an edit, so dispatch the editTask action. If it doesn't have an
   * id, then it's a new task, so dispatch the addTask action.
   * @param e - event
   */
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

  /* It's a hook that allows you to perform side effects in a functional component. In this case, it's
  checking if the id exists in the url, and if it does, it's setting the task state with the task
  that has the same id as the one in the url. */
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
