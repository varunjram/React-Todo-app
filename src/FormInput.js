import { useState } from "react";
import List from "./list-todo";

export default function FormInput() {
  let listid = 1111;
  const [todo, setTodo] = useState([]);
  //   const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let addtodo = e.target.todo.value;
    setTodo((prev) => [{ name: addtodo, id: listid++ }, ...prev]);
    e.target.todo.value = "";
    console.log(listid);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-Form">
        <label htmlFor="todo-input"></label>
        <input type="text" id="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <List todo={todo.name} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
