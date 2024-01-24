import TodoList from "./TodoList";

export default function Aside( {onSelect} ) {
  const handelBtnClick = () => {
    onSelect()
  }

  return (
    <>
      <aside id="aside">
        <h1 className="title-aside">Project</h1>
        <div className="project-box">
          <TodoList onSelectProject={onSelect}/>
        </div>

        <button id="add-project" onClick={handelBtnClick}>
          <span className="material-symbols-outlined">add</span>
          Add Project
        </button>
      </aside>
    </>
  );
}
