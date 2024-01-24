import { projects } from "./PopupCreateProject";
import { useState } from "react";

export default function Main( {onSelect} ) {
  
  const [currProject, setCurrProject] = useState(0);

  // const onSelectProject = (projectId) => {
  //   setCurrProject(projectId);
  // };

  const handelBtnClick = () => {
    onSelect()
    // setCurrProject(projects.id);
  }


  const todoList = projects[currProject].todo.map((todo, index) => (
    <div key={index} className="task">
      {todo.desertions}
      <button className="close-btn">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  ));

  return (
    <>
      <div id="main-page">
        <div className="title">{projects[currProject].title}</div>
        <div className="line-task">
          <div className="todo-list">{todoList}</div>
        </div>
        <button id="add-task" onClick={handelBtnClick}>
          <span className="material-symbols-outlined">add</span>
          Add Task
        </button>
      </div>
    </>
  );
}
