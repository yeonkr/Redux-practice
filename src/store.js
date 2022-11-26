// // 리덕스
// // import { createStore } from "redux";
// // const ADD = "ADD";
// // const DELETE = "DELETE";

// // export const addToDo = (text) => {
// //   return {
// //     type: ADD,
// //     text,
// //   };
// // };

// // export const deleteToDo = (id) => {
// //   return {
// //     type: DELETE,
// //     id,
// //   };
// // };

// // const reducer = (
// //   state = JSON.parse(localStorage.getItem("todos")) || [],
// //   action
// // ) => {
// //   switch (action.type) {
// //     case ADD:
// //       return save([{ text: action.text, id: Date.now() }, ...state]);
// //     case DELETE:
// //       return save(state.filter((toDo) => toDo.id !== action.id));
// //     default:
// //       return state;
// //   }
// // };

// // const save = (state) => {
// //   localStorage.setItem("todos", JSON.stringify(state));
// //   return state;
// // };

// // const store = createStore(reducer);

// // export default store;

// // 툴킷
// import { createStore } from "redux";
// import { createAction } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);
// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };
// export default store;

// 툴킷
import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
