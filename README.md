# Redux Practice

## Redux

- 기본적으로 Javascript application들의 state(상태)를 관리하는 방법
  - React와 많이 사용하면서 유명해졌으나, React에 의존하는 라이브러리는 아님.
  - 이와는 별개로 Angular, Vue.js, Vanilla JS 등 JS 언어내의 여러곳에서 사용가능함.

✅ Store는 data를 저장하는 곳
✅ CreateStore는 reducer를 요구함.
✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
✅ Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
✅ Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});
✅ Subscribe : store 안에 있는 변화 감지
store.subscribe(func); // store안의 변화를 감지하면 func 실행
