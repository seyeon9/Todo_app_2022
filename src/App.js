import React,{useState, useCallback, useRef} from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


function App(){
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);
  const nextId = useRef(4); // ref를 사용하여 변수 담기

  const onInsert = useCallback( value => {
    const todo ={
      id: nextId.current,
      text : value,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  return (
    <>
    <div>Todo App 만들기</div>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
    </>
  );
}

export default App;
