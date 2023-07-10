import React, { useState } from "react";
import { styled } from "styled-components";

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const deleteHandler = (id) => {
    onDelete(id);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
    };
    onUpdate(updatedTask);
    setIsEditing(false);
  };
  return (
    <Item>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <SaveButton onClick={handleSaveClick}>Save</SaveButton>
        </>
      ) : (
        <ListItem>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
          <EditButton onClick={handleEditClick}>
            <img
              alt="Edit"
              width="12px"
              height="10px"
              src="https://tse1.mm.bing.net/th?id=OIP.uhuImhPyEPbzcuU4mUCUVgHaHa&pid=Api&P=0&h=180"
            />
          </EditButton>
          <Delete onClick={() => deleteHandler(task.id)}>X</Delete>
        </ListItem>
      )}
    </Item>
  );
}

export default TaskItem;

const ListItem=styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

`

const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  /* justify-content: flex-start; */
  
`;
const EditButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  flex-basis:10%;
`;

const SaveButton = styled.button`
  cursor: pointer;
  
`;

const Delete = styled.p`
  font-weight: 600;
  color: red;
  cursor: pointer;
  flex-basis:10%;
  align-items: center;
`;
const Title = styled.p`
 flex-basis:25%;
 margin-left:30px;
`;

const Description = styled.p`
flex-basis:25%;
`;
