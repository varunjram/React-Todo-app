import { useState } from "react";

export default function List({ todo }) {
  const [checked, setChecked] = useState(false);
  return (
    <li className="todo-list">
      <input type="checkbox" onChange={(e) => setChecked((prev) => !prev)} />
      <p className={checked && "line-through"}>{todo}</p>
    </li>
  );
}
