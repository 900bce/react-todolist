import React from 'react';
import styled from 'styled-components';
import { useToDo } from '../contexts/ToDoContext';

function FilterInput() {
  const { todoFilter, setTodoFilter } = useToDo();

  return (
    <FilterWrap>
      <input
        type="text"
        value={todoFilter}
        onChange={(event) => setTodoFilter(event.target.value)}
      />
    </FilterWrap>
  );
}

const FilterWrap = styled.div`
  text-align: center;

  input {
    border: 1px solid #999;
    border-radius: 5px;
    padding: 5px;
    margin-top: 15px;
    color: #777;

    &:focus {
      outline: none;
    }
  }
`;

export default FilterInput;
