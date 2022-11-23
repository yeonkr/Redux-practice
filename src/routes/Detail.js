import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const toDos = useSelector((state) => state);

  //클릭된 리스트의 아이디 가져오기
  const selectID = useParams().id;

  //아이디 가져오기
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(selectID));
  console.log(toDoText);

  return (
    <>
      <h1>Detail</h1>
      {toDoText.text}
      Created at : {toDoText.id}
    </>
  );
};

export default Detail;
