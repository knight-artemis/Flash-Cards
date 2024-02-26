import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer, 
});

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;