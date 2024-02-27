import { AnyAction } from '@reduxjs/toolkit';

const initialState = {};

const gameReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GAME':
      return payload;

    case 'END_GAME':
      return payload;

    default:
      return state;
  }
};

export default gameReducer;
