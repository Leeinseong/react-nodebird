import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// async action creater

// action Creater
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// (이전상태, 액션) => 다음상태,  combinReducers = reducer 합치는거
const rootReducer = combineReducers({
  // index Reducer, for HYDRATE를 위해서
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      // reducer 초기화 할때를 위해서
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
