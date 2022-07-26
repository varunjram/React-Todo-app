import "./App.css";
import FormInput from "./FormInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>#todo</h1>
        <nav>
          <ul className="nav-ul">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </nav>
        <FormInput />
      </header>
    </div>
  );
}

export default App;
