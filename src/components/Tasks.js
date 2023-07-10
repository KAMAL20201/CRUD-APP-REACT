import React from 'react'
import TaskItem from './TaskItem'
import styled from 'styled-components'

function Tasks({tasks,onDelete,onUpdate}) {

    
const delHandler = (id) => {
    onDelete(id);
}

  return (
    <Container>
    <TaskHead>
      
        <h4>Title</h4>
        <h4>Description</h4>
        <h4>Edit</h4>
        <h4>Delete</h4>
    </TaskHead>
    <ul>
      {tasks.map( (task)=>{
        return(
         <TaskItem key={task.id} task={task} onDelete={delHandler} onUpdate={onUpdate}/>
        )
      })}
      </ul>
    </Container>
  )
}

export default Tasks

const Container=styled.div`
width:100%;

ul{
    list-style-type: none;
    width:100%;
    margin:0;
    padding:0;
}
`;
const TaskHead = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-around;


h4:nth-child(1) {
    margin-left:70px;
    margin-right: 190px;
    
  }

  h4:nth-child(2) {
    margin-left:30px;
    margin-right: 20px;
    
  }

  h4:nth-child(3) {
    margin-left:120px;
    margin-right: -50px;
  }

  h4:nth-child(4) {
    margin-right: 60px;
    margin-left: 20px;
  }
`