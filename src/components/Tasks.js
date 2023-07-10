import React from "react";
import TaskItem from "./TaskItem";
import styled from "styled-components";

function Tasks({ tasks, onDelete, onUpdate }) {
  const delHandler = (id) => {
    onDelete(id);
  };

  return (
    <Container>
      <TaskHead>
        <h4>Title</h4>
        <h4>Description</h4>
        <h4>Edit</h4>
        <h4>Delete</h4>
      </TaskHead>
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={delHandler}
              onUpdate={onUpdate}
            />
          );
        })}
      </ul>
    </Container>
  );
}

export default Tasks;

const Container = styled.div`
  width: 100%;

  ul {
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
const TaskHead = styled.div`
display:flex;
width:100%;
align-items:center;

margin:30px 0px;

h4{

    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    flex-basis: 25%; /* Adjust the flex-basis value as needed */
  &:nth-child(1){
    flex-basis:22%;
    justify-content: center;
  }
  &:nth-child(2){
    flex-basis:45%;
    justify-content: center;
  }
  &:nth-child(3){
    flex-basis:12%;
    justify-content: center;
  }
  &:nth-child(4){
    flex-basis:13%;
    justify-content: center;
  }
}

  @media (max-width: 400px) {
   
    
    margin: 15px 0px;
    align-items:center;
    
    h4{

    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    flex-basis: 25%; /* Adjust the flex-basis value as needed */
    font-size:10px;

      &:nth-child(1){
        flex-basis:40%;
        justify-content: center;
      }
      &:nth-child(2){
        flex-basis:20%;
      }
      &:nth-child(3){
      flex-basis:27%;
      }
      &:nth-child(4){
      flex-basis:5%;
      }
  }


`;
