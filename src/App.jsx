import styled from 'styled-components';
import ToDoList from './components/ToDoList';
import EditModal from './components/EditModal';
import NewToDo from './components/NewToDo';
import FilterInput from './components/FilterInput';
import { useToDo } from './contexts/ToDoContext';

function App() {
  const {
    todoData,
    isShowModal,
    isNewItem,
    isFilter,
    setIsNewItem,
    setIsFilter,
  } = useToDo();

  return (
    <AppContainer>
      <h1>
        To Do List
        <button
          className="show-serach-btn"
          onClick={() => setIsFilter(!isFilter)}>
          <img src="src/assets/loupe.png" />
        </button>
      </h1>
      {isFilter && <FilterInput />}
      <ToDoList list={todoData} />
      {!isNewItem && (
        <button
          className="show-add-new-btn"
          onClick={() => setIsNewItem(!isNewItem)}>
          +
        </button>
      )}
      {isNewItem && <NewToDo />}
      {isShowModal && <EditModal />}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  h1 {
    margin-top: 30px;
    text-align: center;
    font-weight: 500;
  }

  .show-serach-btn {
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

  .show-add-new-btn {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #999;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    line-height: 20px;
    color: #777;
    cursor: pointer;
  }
`;
