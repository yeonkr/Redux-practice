import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function ToDo({ id, text }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      {text}
      <button onClick={onClick}>❌</button>
    </li>
  );
}

export default ToDo;
