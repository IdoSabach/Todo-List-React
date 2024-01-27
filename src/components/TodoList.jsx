import { projects } from "./PopupCreateProject";
// import { useState } from "react";

export default function TodoList({selectedId}) {
  // const [curr , setCurr] = useState(projects[0].title)

  function id(id){
    console.log(id)
    selectedId()
  }
  return (
    <div>
      <ul>
        {projects.map((todo) => (
          <button
            key={todo.id}
            id="todo-list"
            onClick={() => id(todo.id)}
          >
            {todo.title}
          </button>
        ))}
      </ul>
    </div>
  );
}
