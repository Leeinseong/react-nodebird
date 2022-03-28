import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

// generator : yield 에서 멈춤, generatore.next()로 실행
/*
  const gen = function* () {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
  }
  const g = gen();
  g.next(); =>  1 {value: 1, done: false};
  g.next(); =>  2 {value: 2, done: false};
  g.next(); =>  3 {value: 3, done: false};
  g.next(); =>  1 {value: , done: true};
*/

// all: 배열안의 것을 동시에 실행, fork : 비동기 함수를 실행.
// call: 동기함수 호출, put: dispatch랑 비슷, redux-saga에서 yeild는 await과 비슷
// yield는 1회용이다. takeEvery: while(true)를 대체 + yield를 계속 할수 있게
// takeLatest: 반복실행중, 마지막 action만 실행 (요청은 반복실행, 응답을 취소)
// throttle(action, function, time) : time동안 1번만 실행가능 ( 요청을 보내는 시간을 제한 )

// 쓰로들링 vs 디바운싱 :
// 쓰로들링 : 마지막 함수가 호출된 후 일정시간 동안 재호출 방지
// 디바운싱 : 연이어 호출되는 함수들중 마지막만 실행

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
