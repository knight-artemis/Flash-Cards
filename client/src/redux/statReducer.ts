import { AnyAction } from "@reduxjs/toolkit";

const initialState = [{}];

const statReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MY_STAT': 
      return payload

    default:
      return state;
  }
};

export default statReducer;