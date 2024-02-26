import { AnyAction } from "@reduxjs/toolkit";

const initialState = [{}];

const cardReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ALL_CARDS': 
      return payload

    default:
      return state;
  }
};

export default cardReducer;