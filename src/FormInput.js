import { useState } from "react";
import List from "./list-todo";

export default function FormInput() {
  const [listid, setlistid] = useState(11);
  const [todo, setTodo] = useState([]);
  //   const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlistid((p) => p + 1);
    console.log(listid);
    let addtodo = e.target.todo.value;
    setTodo((prev) => [{ name: addtodo, id: listid }, ...prev]);
    e.target.todo.value = "";
    console.log(todo[0].id);
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
