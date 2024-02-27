import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import cardReducer from './cardReducer';
import gameReducer from './gameReducer';
import statReducer from './statReducer';

const rootReducer = combineReducers({
  userReducer,
  cardReducer,
  gameReducer,
  statReducer
});

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;