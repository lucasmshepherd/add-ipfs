//state
import { createStore, applyMiddleware, combineReducers } from 'redux'
//import { legacy_createStore as createStore } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import users from './users/reducer'
import music from './music/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const combinedReducer = combineReducers({
  users, 
  music
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users: {
        connected: state.users.connected
      },
      music: {
        playing: state.music.playing
      }
    }
    return nextState
  } else {
    return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(combinedReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore)