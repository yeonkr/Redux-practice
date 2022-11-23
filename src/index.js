import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

number.innerText = 0;

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

//--------------------------------------//

// countStore.dispatch({ type: "ADD" }); // 액션은 객체로.
// // 메시지를 보낼 땐 디스패치를 사용한다.
// // 내가 전송한 메세지는 액션에 넣고, 해야할 일은 액션을 체크하면 됨

// countStore.dispatch({ type: "MINUS" });

// console.log(countStore.getState());
// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
