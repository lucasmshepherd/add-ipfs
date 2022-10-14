// state
import { userActionTypes } from "./action";

const userInitState = {
  connected: "false"
}

export default function reducer(state=userInitState, action) {
  switch(action.type) {
    case userActionTypes.UPDATE_USER_STATUS:
      return { ...state, connected: "true"};
    case userActionTypes.REMOVE_USER_STATUS:
      return { ...state, connected: "false"};
    default:
      return state;
  }
}