import "./App.css";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Tablero Kanban</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
