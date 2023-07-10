
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY_TASKS= [
  { id: 1, title: 'Complete Project Proposal', description: 'Finalize the project for client A.' },
  { id: 2, title: 'Prepare Presentation Slides', description: 'Create slides for the upcoming presentation.' },
  { id: 3, title: 'Review Code Pull Request', description: 'Go through the code changes in the pull request' },
  { id: 4, title: 'Attend Team Meeting', description: 'Participate in the weekly team meeting ' },
  { id: 5, title: 'Bug Fixing - Login Page', description: 'Identify and fix the bug causing login issues' },
];



function App() {

  const [tasks,setTasks]=useState(DUMMY_TASKS);
  const [taskInput,setTaskInput]=useState('');
  const [taskDescription,setTaskDescription]=useState('');

  const deleteHandler=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id));
  }
  const inputTaskHandler=(e)=>{
    setTaskInput(e.target.value);
  }
  const inputDescHandler=(e)=>{
    setTaskDescription(e.target.value);
  }
  const addHandler=()=>{
    if(taskInput.trim().length===0 || taskDescription.trim().length===0){
      return;
    }
    setTasks([...tasks,{id:Math.random(),title:taskInput,description:taskDescription}]);
  }
  const updateHandler=(updatedTask)=>{
    setTasks((prevTasks) =>
    prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  );
  }


  return (
    <Container>
      <Header/>
      <Add>
       <input type="text" placeholder="Add Task" value={taskInput} onChange={inputTaskHandler}/>
       <input type="text" placeholder="Add Description" value={taskDescription} onChange={inputDescHandler}/>
       <button onClick={addHandler}>Add</button>
       </Add>
      <Tasks tasks={tasks} onDelete={deleteHandler} onUpdate={updateHandler}/>
    </Container>
  );
}

export default App;


const Container=styled.div`
align-items:center;
justify-content:center;
width:100%;

`

const Add=styled.div`
display:flex;
align-items:center;
justify-content:center;
input{
  margin:10px 10px;
}
button{
  margin:10px 10px;
}

`