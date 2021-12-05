import React from 'react';
import styled, { css } from 'styled-components';
import { useToDo } from '../contexts/ToDoContext';
import editImg from '../assets/edit.png';
import deleteImg from '../assets/bin.png';

function ToDoList({ list }) {
  const { toggleTodo, removeTodo, toggleModal, todoFilter, isFilter } =
    useToDo();

  return (
    <List>
      {list
        .filter(
          (item) =>
            item.text.toLowerCase().includes(todoFilter.toLowerCase()) ||
            !isFilter
        )
        .map((item, index) => (
          <ListItem key={item.id} isDone={item.isDone}>
            <p onClick={() => toggleTodo(index)}>{item.text}</p>
            <div className="btn-wrap">
              <button onClick={() => toggleModal(item.text, index)}>
                <img src={editImg} />
              </button>
              <button onClick={() => removeTodo(index)}>
                <img src={deleteImg} />
              </button>
            </div>
          </ListItem>
        ))}
    </List>
  );
}

const List = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: fit-content;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 55px;
  cursor: default;

  p {
    cursor: pointer;

    ${(props) =>
      props.isDone &&
      css`
        text-decoration: line-through;
      `}
  }

  .btn-wrap {
    visibility: hidden;
    opacity: 0;
    height: 15px;
    margin-left: 5px;
    transition: all 0.5s;

    button {
      background-color: transparent;
      border: none;
      width: 15px;
      height: 15px;
      margin-left: 10px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

  &:hover .btn-wrap {
    visibility: visible;
    opacity: 0.7;
  }
`;

export default ToDoList;
