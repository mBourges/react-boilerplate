import { createSelector } from 'reselect';

const selectTodos = () => (state) => state.get('todos');

export const selectTodoList = () => createSelector(
  selectTodos(),
  (todosState) => todosState.get('todos').toJS()
);
