import { useState } from "react";
import List from "./list-todo";

export default function FormInput({ filterkey }) {
  const [listid, setlistid] = useState(11);
  const [todo, setTodo] = useState([
    { name: "1", id: 1 },
    { name: "2", id: 2 },
    { name: "3", id: 3 },
    { name: "4", id: 4 },
    { name: "5", id: 5 },
    { name: "6", id: 6 },
  ]);

  console.log(filterkey);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlistid((p) => p + 1);
    let addtodo = e.target.todo.value;
    setTodo((prev) => [{ name: addtodo, id: listid }, ...prev]);
    e.target.todo.value = "";
  };

  const display = (filteredTodo) =>
    filteredTodo.map((todo) => (
      <List
        todo={todo.name}
        key={todo.id}
        id={todo.id}
        checked={todo.checked}
        atToggle={atToggle}
      />
    ));
  let active = todo.filter((task) => !task.checked);
  let completed = todo.filter((task) => task.checked);

  const filtereddisplay = (filterkey) => {
    if (filterkey === "all") {
      return display(todo);
    } else if (filterkey === "active") {
      return display(active);
    } else return display(completed);
  };

  function atToggle(id) {
    setTodo(
      todo.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(todo);

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-Form">
        <label htmlFor="todo-input"></label>
        <input type="text" id="todo" />
        <button type="submit">Add</button>
      </form>
      {/* <ul>{display(todo)}</ul> */}
      <ul>{filtereddisplay(filterkey)}</ul>
    </div>
  );
}
