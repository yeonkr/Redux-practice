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
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

const reducer = createReducer([], {
  // createReducer() : 새로운 state를 리턴하거나 state를 mutate할 수 있다. 리턴할 때는 새로운 state여야만한다.
  // 액션이 addToDo일때 state, action 넘긴 후 무언가를 할 것.

  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({ reducer });
// configureStore() : Reducer에서 반환된 새로운 state를 Store라는 객체로 정리해 관리하는 곳

export default store;
