import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const tasksState =  useSelector((state) => state.tasks);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
