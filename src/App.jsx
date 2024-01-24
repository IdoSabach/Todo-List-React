import Aside from './components/Aside'
import Main from './components/Main';
import Footer from './components/Footer';
import PopupCreateProject from './components/PopupCreateProject';
import "./App.css";
import { useState } from 'react';

function App() {
  const [open , setOpen] = useState(false)

  function handelOpen(){
    setOpen(true)
    if(open === true){
      setOpen(false)
    }
  }

  return (
    <>
      <header id="header">Welcome to your Todo List!</header>
      <main id="main">
        <Aside onSelect={handelOpen}/>
        <Main />
      </main>
      <Footer />
      <PopupCreateProject open={open} />
    </>
  );
}

export default App;
