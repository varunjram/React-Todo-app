import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

function App() {
  const [filterkey, setFilterKey] = useState("all");

  function handleclick(event) {
    setFilterKey(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>#todo</h1>
        <nav>
          <div className="nav-ul">
            <button value="all" onClick={handleclick}>
              All
            </button>
            <button value="active" onClick={handleclick}>
              Active
            </button>
            <button value="completed" onClick={handleclick}>
              Completed
            </button>
          </div>
        </nav>
        <FormInput filterkey={filterkey} />
      </header>
    </div>
  );
}

export default App;
