import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
