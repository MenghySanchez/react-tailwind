import "./App.css";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
/* Setting the background color to slate-900 and the text color to slate-300. */
    <div className="bg-slate-900 
                    min-h-screen
                    scroll-m-1 
                  text-slate-300
                  ">

      <div className="justify-center text-center">
      <h1 className="font-bold text-2xl py-2"> Notes Table</h1>
      </div>
      
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
