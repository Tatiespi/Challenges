import React, {useState} from "react";

const Addtodo = ({add}) => {
  const [text, setText] = useState("");
  return (
    <div className="Addtodo">
      <input value={text} onChange={e => setText(e.target.value)} className="AddtodoInput" />
      <button className="AddtodoButton" onClick={() => {add(text); setText("")}}>Agregar</button>
    </div>
  );
}

export default Addtodo;