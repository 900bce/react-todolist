import { createContext, useContext, useEffect, useState } from 'react';
import { initData } from '../to-do-list-data';

const ToDoContext = createContext({});

const ToDoProvider = (props) => {
  const [todoData, setTodoData] = useState([]);
  const [todoFilter, setTodoFilter] = useState('');
  const [isShowModal, setShowModal] = useState(false);
  const [isNewItem, setIsNewItem] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [todoEditContent, setTodoEditContent] = useState('');
  const [currentEditTodoIndex, setCurrentEditTodoIndex] = useState(-1);

  useEffect(() => {
    setTodoData(initData);
  }, []);

  const toggleTodo = (index) => {
    setTodoData((prev) => {
      const todoData = JSON.parse(JSON.stringify(prev));
      todoData[index].isDone = !todoData[index].isDone;
      return todoData;
    });
  };

  const removeTodo = (index) => {
    setTodoData((prev) => {
      const todoData = JSON.parse(JSON.stringify(prev));
      todoData.splice(index, 1);
      return todoData;
    });
  };

  const toggleModal = (content, index) => {
    setShowModal(!isShowModal);
    setTodoEditContent(content);
    setCurrentEditTodoIndex(index);
  };

  const submitEditTodo = (content) => {
    setTodoData((prev) => {
      const todoData = JSON.parse(JSON.stringify(prev));
      todoData[currentEditTodoIndex].text = content;
      return todoData;
    });
    setTodoEditContent('');
    toggleModal();
  };

  const addNewToDo = (value) => {
    setTodoData((prev) => [
      ...prev,
      {
        id: `${prev.length + 1}`,
        text: value,
        isDone: false,
      },
    ]);
  };

  return (
    <ToDoContext.Provider
      value={{
        todoData,
        isShowModal,
        isNewItem,
        todoEditContent,
        todoFilter,
        isFilter,
        setIsFilter,
        setTodoFilter,
        toggleTodo,
        removeTodo,
        toggleModal,
        setTodoEditContent,
        submitEditTodo,
        addNewToDo,
        setIsNewItem,
      }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

const useToDo = () => useContext(ToDoContext);

export { ToDoProvider, useToDo };
