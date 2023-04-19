import React, {useState} from "react";

const Todo = ({ todo, check, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">
            {
              todo.done 
              ? <del>{todo.text}</del>
              : todo.text
            }
          </span>
          <button className="CheckTodo" onClick={check}>Completar</button>
          <button className="RemoverTodo" onClick={remove}>Eliminar</button>
          <button className="EditarTodo" onClick={() => setMode("editar")}>Editar</button>
        </>
        : <>
          <input value={text} onChange={e => setText(e.target.value)} className="EditarTodoInput" />
          <button className="EditarTodoSave" onClick={() => {edit(text); setMode("list");}}>Guardar</button>
          <button className="EditarTodoCancel" onClick={() => setMode("list")}>Cancelar</button>
        </>}
    </div>
  );
}

export default Todo;