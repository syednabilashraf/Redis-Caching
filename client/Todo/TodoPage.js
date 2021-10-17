import React, { useState,useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import  {list} from "./api-todo";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const abortController = new AbortController() 
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setTodos(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

  return (
    <div>
      <TodoForm makeTodos={(todo) => setTodos([...todos, todo])} />
      {todos.map((todo,index) => {
        return <Todo todo={todo.text} todoNo = {index}/>;
      })}
    </div>
  );
}

export default TodoPage;

//create api