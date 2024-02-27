import type { UserType } from "../types";
import type { UserActionType } from "./userReducer";

export type Actiontype<T> = {
type: string;
payload: T
}

export default class Actions {
  static regLog(payload: UserType): UserActionType {
    return { type: 'REG_LOG', payload }
  }

  static checkAuth(payload: UserType): UserActionType {
    return { type: 'CHECK_AUTH', payload }
  }

  static logout(payload: UserType): UserActionType {
    return { type: 'LOGOUT', payload }
  }
  static updateLog(payload: UserType): UserActionType {
    return { type: 'UPDATE_LOGIN', payload }
  }



  static getAllCards(payload: []) {
    return { type: 'GET_ALL_CARDS', payload }
  }

  static setGame(payload: []) {
    return { type: 'SET_GAME', payload }
  }

  static endGame(payload: []) {
    return { type: 'END_GAME', payload }
  }
}
