import React from "react";
import ProfileMenu from "./components/profileMenu";
import "./App.css";
import Header from "./components/header/index.";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main";
import data from './mock.json'

function App() {
  const [tasks, setTasks] = React.useState(data)
  const [isOpen, setIsOpen] = React.useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Router>
        <Header toogle={toogle} isOpen={isOpen} />
        <ProfileMenu  isOpen={isOpen} />
        <Main tasks={tasks} setTasks={setTasks} />
      </Router>
    </>
  );
}

export default App;
