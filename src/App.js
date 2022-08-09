import "./App.css";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
/* Setting the background color to slate-900 and the text color to slate-300. */
    <div className="bg-slate-900 h-screen text-slate-300">
      <h1> Kanban Table</h1>
      <div className="flex items-center justify-center h-full">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
