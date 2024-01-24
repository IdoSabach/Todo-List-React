let project = [
  {title :'Today' , id: 0 , todo: []},
  {title :'This Week' , id: 1 , todo: []},
  {title :'This Mount' , id: 2 , todo: []}
]

export default function TodoList() {
  function handelClick(text){
    console.log(text)
  }
  return (
    <div >
      <ul>
          {project.map((todo) =>(
            <button key={todo.id} id="todo-list" onClick={() => handelClick(todo.title)}>{todo.title}</button>
          ))}
      </ul>
    </div>
  );
}
