import { fromJS } from 'immutable';
import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  todos: []
});

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return state
        .set('loading', true)
        .set('error', false);
    case FETCH_TODOS_SUCCESS:
      return state
        .set('todos', action.todos)
        .set('loading', false);
    case FETCH_TODOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default todoReducer;
