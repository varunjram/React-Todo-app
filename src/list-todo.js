// import { useState } from "react";

export default function List({ todo, checked, atToggle, id }) {
  return (
    <div>
      <li className="todo-list">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => atToggle(id)}
        />
        <p className={checked ? "line-through" : null}>{todo}</p>
      </li>
    </div>
  );
}
