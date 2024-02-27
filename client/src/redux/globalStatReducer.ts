import { AnyAction } from "@reduxjs/toolkit";

const initialState = [{}];

const globalStatReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ALL_STAT': 
      return payload

    default:
      return state;
  }
};

export default globalStatReducer;