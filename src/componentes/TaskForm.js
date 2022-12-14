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
    <form onSubmit={handleSubmit} className=" bg-zinc-800 
                                                max-w-sm 
                                                p-4 
                                                mb-1
                                                rounded-lg ">
      <label 
      htmlFor="title"
      className=" block 
                  font-bold">Nota</label>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        value = {task.title}
        className=" w-full 
                    p-2
                    rounded-md
                    bg-zinc-600
                    mb-2
                    text-white"
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripci??n de la actividad"
        onChange={handleChange}
        value = {task.descripcion}
        className=" w-full 
                    p-2
                    rounded-md
                    bg-zinc-600
                    mb-2
                    text-white"
        required
      />

      <button className="py-1 px-2   
                  bg-indigo-600 
                  hover:bg-indigo-700 
                  focus:ring-indigo-500 
                  focus:ring-offset-indigo-200 
                  text-white 
                    w-full 
                    transition 
                    ease-in 
                    duration-200 
                    text-center 
                    text-xs 
                    font-semibold 
                    shadow-md 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-offset-2  
                    rounded-lg ">Guardar</button>
    </form>
  );
}
