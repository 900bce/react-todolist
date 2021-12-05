import React, { useState } from 'react';
import styled from 'styled-components';
import { useToDo } from '../contexts/ToDoContext';

function EditModal() {
  const { todoEditContent, setTodoEditContent, toggleModal, submitEditTodo } =
    useToDo();

  return (
    <Modal>
      <input
        type="text"
        value={todoEditContent}
        onChange={(event) => setTodoEditContent(event.target.value)}
      />
      <button onClick={() => submitEditTodo(todoEditContent)}>OK</button>
      <button onClick={toggleModal}>canel</button>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: rgba(240, 240, 240, 0.7);
  border: 1px solid #777;
  border-radius: 8px;

  input {
    display: block;
    width: 80%;
    height: 40px;
    margin-top: 30px;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #777;
    border-radius: 8px;
  }

  button {
    width: 30%;
    height: 25px;
  }
`;

export default EditModal;
