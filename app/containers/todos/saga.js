import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FETCH_TODOS } from './constants';
import { fetchTodosSuccess, fetchTodosError } from './actions';

import request from '../../utils/request';

export function* getTodos() {
  const requestURL = 'https://forgapp-mbourges.c9users.io:8080/api/todos';

  const todos = yield call(request, requestURL);

  if (!todos.err) {
    yield put(fetchTodosSuccess(todos.data));
  } else {
    yield put(fetchTodosError(todos.err));
  }
}

export function* getTodosWatcher() {
  while (yield take(FETCH_TODOS)) {
    yield call(getTodos);
  }
}

export function* getTodosBoot() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getTodosWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  getTodosBoot,
];
