import type { AnyAction } from '@reduxjs/toolkit';
import type { TasksType } from '../types';

export type Notepad = {
  id: number;
  notepad_title: string;
};

export type NotepadsState = {
  notepads: Notepad[];
};



const initialState: NotepadsState = {
  notepads: [],
};

//! {type: "ADD_ALL_TASKS", payload: [{}, {}, {}]} - action

const notepadReducer = (state: NotepadsState = initialState, action: AnyAction): NotepadsState => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ALL_NOTEPADS':
      return { ...state, notepads: payload };

    case 'ADD_ONE_NOTEPAD':
      return { ...state, notepads: [...state.notepads, payload] };

    case 'DEL_ONE_NOTEPAD':
      return { ...state, notepads: state.notepads.filter((el) => el.id !== payload) };

    default:
      return state;
  }
};

export default notepadReducer;
