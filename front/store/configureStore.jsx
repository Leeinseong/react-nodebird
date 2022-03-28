import { applyMiddleware, createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = (context) => {
  // console.log(context);
  const sagaMiddleWare = createSagaMiddleware();
  const middlewares = [sagaMiddleWare];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // 배포용
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
