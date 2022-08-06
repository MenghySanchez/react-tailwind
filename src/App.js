import "./App.css";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

function App() {
 
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
