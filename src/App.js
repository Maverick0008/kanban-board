import React  from "react";
import { useEffect } from "react";
import ProfileMenu from "./components/profileMenu";
import "./App.css";
import Header from "./components/header/index.";
import { BrowserRouter as Router}  from "react-router-dom";

import Main from "./components/main";
import Footer from "./components/footer";
// import data from './mock.json'

function App() {
  const initialState =  JSON.parse(window.localStorage.getItem('tasks')) || []
  console.log(initialState)

  const [tasks, setTasks] = React.useState(initialState)
  const [isOpen, setIsOpen] = React.useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  
  return (
    <>
      <Router>
        <Header toogle={toogle} isOpen={isOpen} />
        <ProfileMenu  isOpen={isOpen} />
        <Main tasks={tasks} setTasks={setTasks}   />
        <Footer tasks={tasks} />
      </Router>
    </>
  );
}

export default App;
