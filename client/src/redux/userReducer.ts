import type { AnyAction } from "@reduxjs/toolkit";
import type { TasksType } from "../types";

 export type User = {
    userId: number,
    login:string
}

 export type UserState = {
 user: User
}


const initialState: UserState = {
  user: {
    userId: 0,
    login: ''
  },
};

type UserActionType = {
  type: string;
  payload: User;
}

//! {type: "ADD_ALL_TASKS", payload: [{}, {}, {}]} - action

const userReducer = ( state: UserState = initialState, action: UserActionType): UserState => {
  const { type, payload } = action;

  switch (type) {
    case 'USER_SIGN_IN':
      return { ...state, user: payload };

    case 'USER_SIGN_OUT': 
      return { ...state, user: { userId: 0,login: ''}}

    default:
      return state;
  }
};

export default userReducer;