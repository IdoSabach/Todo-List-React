import { projects } from "./PopupCreateProject";

export default function TodoList() {
  function handelClick(text, id) {
    console.log(text);
    console.log(id);
  }
  return (
    <div>
      <ul>
        {projects.map((todo) => (
          <button
            key={todo.id}
            id="todo-list"
            onClick={handelClick}
          >
            {todo.title}
          </button>
        ))}
      </ul>
    </div>
  );
}
