import React, { useState } from 'react';
import { useToDo } from '../contexts/ToDoContext';
import styled from 'styled-components';

function NewToDo() {
  const [newToDoValue, setNewToDoValue] = useState('');
  const { addNewToDo, setIsNewItem } = useToDo();

  return (
    <NewToDoWrap>
      <button className="close" onClick={() => setIsNewItem(false)}>
        &times;
      </button>
      <input
        type="text"
        value={newToDoValue}
        onChange={(event) => setNewToDoValue(event.target.value)}
      />
      <button
        className="add-new-btn"
        onClick={() => {
          addNewToDo(newToDoValue);
          setNewToDoValue('');
        }}>
        +
      </button>
    </NewToDoWrap>
  );
}

const NewToDoWrap = styled.div`
  text-align: center;

  input {
    border: 1px solid #999;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    margin-top: 15px;
    color: #777;

    &:focus {
      outline: none;
    }
  }

  .add-new-btn {
    margin-left: -1px;
    background-color: transparent;
    border: 1px solid #888;
    border-radius: 0 5px 5px 0;
    padding: 5px 10px;

    &:hover {
      background: #777;
      color: #fff;
    }
  }

  .close {
    width: 20px;
    height: 20px;
    background: transparent;
    margin-right: 10px;
    color: #999;
    line-height: 20px;
    border: 1px solid #999;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default NewToDo;
