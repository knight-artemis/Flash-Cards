import type { UserType } from "../types";

const initialState: UserType = {
  id: 0,
  login: ''
};

export type UserActionType = {
  type: string,
  payload: UserType
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state = initialState, action: UserActionType): UserType => {
  const { type, payload } = action;

  switch (type) {
    case 'REG_LOG': 
      return payload

    case 'LOGOUT':
      return initialState

    default:
      return state;
  }
};

export default userReducer;