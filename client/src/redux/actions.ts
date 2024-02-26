import type { NotepadsState } from "./notepadReducer";
import type { User } from "./userReducer";

export default class Actions {
  static signIn(payload: User): {type: 'USER_SIGN_IN', payload: User} {
    return { type: 'USER_SIGN_IN', payload }
  }

  static signOut(): {type: 'USER_SIGN_OUT'} {
    return { type: 'USER_SIGN_OUT'}
  }
  
  static addAllNotepads(payload: NotepadsState): {type: 'ADD_ALL_NOTEPADS', payload: NotepadsState} {
    return { type: 'ADD_ALL_NOTEPADS', payload } 
  }

  static addOneNotepad(payload: NotepadsState): {type: 'ADD_ONE_NOTEPAD', payload: NotepadsState} {
    return { type: 'ADD_ONE_NOTEPAD', payload }
  }

  static delOneNotepad(payload: NotepadsState): {type: 'DEL_ONE_NOTEPAD', payload: NotepadsState} {
    return { type: 'DEL_ONE_NOTEPAD', payload }
  }

}


