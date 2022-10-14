// state
import { musicActionTypes } from "./action";

const musicInitState = {
  playing: "false"
}

export default function reducer(state=musicInitState, action) {
  switch(action.type) {
    case musicActionTypes.UPDATE_MUSIC_STATUS:
      return { ...state, playing: "true"};
    case musicActionTypes.REMOVE_MUSIC_STATUS:
      return { ...state, playing: "false"};
    default:
      return state;
  }
}