//state
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import users from './users/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const combinedReducer = combineReducers({
  users,
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users: {
        connected: state.users.connected
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