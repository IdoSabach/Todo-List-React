import Aside from './components/Aside'
import Main from './components/Main';
import Footer from './components/Footer';
import PopupCreateProject from './components/PopupCreateProject';
import PopupCreateTask from './components/PopupCreateTask';
import "./App.css";
import { useState } from 'react';
import { projects } from "./components/PopupCreateProject";

function App() {
  const [openProject , setOpenProject] = useState(false)
  const [openTask , setOpenTask] = useState(false)

  function handelOpenProject(){
    setOpenProject(true)
    if(openProject === true){
      setOpenProject(false)
    }
  }

  function handelOpenTask(){
    setOpenTask(true)
    if(openTask === true){
      setOpenTask(false)
    }
  }

  function handelClose(){
    setOpenProject(false)
  }

  function handelCloseTask(){
    setOpenTask(false)
  }

  return (
    <>
      <header id="header">Welcome to your Todo List!</header>
      <main id="main">
        <Aside onSelect={handelOpenProject}/>
        <Main onSelect={handelOpenTask}/>
      </main>
      <Footer />
      <PopupCreateProject open={openProject} onSelectBtn={handelClose}/>
      <PopupCreateTask open={openTask} onSelectBtn={handelCloseTask}/>
    </>
  );
}

export default App;
