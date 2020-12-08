import React from 'react';
import './App.css';
import TaskList from './component/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './component/TaskForm';
import Header from './component/Header';
// import Hookcomp from './component/hookcomp';
// import Inputhook from './component/Inputhook';
// import Hooks4 from './component/Hooks4';
// import Effect from './component/effect';
// import Concompo from './component/Concompo';
// import Hooksmouse from './component/Hooksmouse';

function App() {
  return (
    <TaskListContextProvider>
    <div className="container">
    <div className="app-wrapper">
      <Header/>
      <div className="main">
      <TaskForm/>
      <TaskList/>
      </div>
    </div>
    </div>
    </TaskListContextProvider>
  );
}

export default App;

{/* <Hookcomp/>
<Inputhook/>
<Hooks4/>
<Effect/>
<Concompo/>
<Hooksmouse/> */}

