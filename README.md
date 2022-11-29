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

### Recap

✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)
return하는 것은 application의 state가 됨

✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)

✅ dispatch : reducer에게 action을 보내는 방법

✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행

✅ if (action.type==='sadfsa') 대신 switch가 자주 쓰임

```js
switch(action.type){
case ..blah..:
return smth
case ..blah2..:
return smth2
default:
return smth3
}
```

✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이

<br />

## Redux Toolkit

- 등장배경
  - 기존 Redux -> 많은 양의 코드를 써야함(Action, Action Creator, Switch, Case, Return, Default 등)

✅ createSlice : 초기 state, reducer 함수 객체, "slice 이름"을 받아 리듀서 및 state에 해당하는 action crator와 action type을 자동으로 생성하는 함수. 내부적으로는 createAction 및 createReducer를 사용하므로 Immer를 사용하여 "mutating" 불변 업데이트를 작성할 수도 있다.
