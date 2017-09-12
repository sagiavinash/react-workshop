import { createStore, combineReducers, applyMiddleware } from 'redux';
import { hashHistory } from 'react-redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';


export const updateUserDetails = (changes) => ({
  type: 'UPDATE_USER',
  payload: changes,
});

function userDetailsReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
  }

  return state;
}

const rootReducer = (
  combineReducers({
    userDetails: userDetailsReducer,
    routing: routerReducer,
  })
);

const middleware = routerMiddleware(hashHistory);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
);

export default store;
