import TodoList from "./TodoList";

export default function Aside( {onSelect} ) {
  const handelBtnClick = () => {
    onSelect()
  }

  function print(id){
    console.log(id)
  }

  return (
    <>
      <aside id="aside">
        <h1 className="title-aside">Project</h1>
        <div className="project-box">
          <TodoList onClickProject={handelBtnClick} selectedId={(id) => print(id)}/>
        </div>

        <button id="add-project" onClick={handelBtnClick}>
          <span className="material-symbols-outlined">add</span>
          Add Project
        </button>
      </aside>
    </>
  );
}
