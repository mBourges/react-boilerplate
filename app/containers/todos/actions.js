import { fromJS } from 'immutable';
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from './constants';

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  };
}

export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos: fromJS(todos)
  };
}

export function fetchTodosError(error) {
  return {
    type: FETCH_TODOS_ERROR,
    error
  };
}
