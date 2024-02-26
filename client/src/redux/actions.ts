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

  static logout(payload: UserType): UserActionType {
    return { type: 'LOGOUT', payload }
  }

  static getAllCards(payload: []) {
    return { type: 'GET_ALL_CARDS', payload }
  }

}
