import React from "react";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";
import { useTodo } from "../hooks/todo.js";

const Todoapp = () => {
  const [state, count, pending, dispatch] = useTodo();

  return (<>
  <h1>Cantidad: {count}</h1>
  <h1>Pendientes: {pending}</h1>
    <AddTodo
      agregar={text => dispatch({type: "agregar", text: text})}
    />
    {state.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        check={() => dispatch({type: "check", id: todo.id})}
        remover={() => dispatch({type: "remover", id: todo.id})}
        editar={text => dispatch({type: "editar", id: todo.id, text: text})}
      />
    ))}
  </>);
}

export default Todoapp;