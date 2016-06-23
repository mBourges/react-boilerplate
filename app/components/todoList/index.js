import React from 'react';
import TodoListItem from '../todoListItem';

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo, index) => (
    <TodoListItem
      Completed={ todo.Completed }
      Title={ todo.Title }
      key={ index }
    />
  ));

  return (<ul>
    { todoList }
  </ul>);
};

TodoList.propTypes = {
  todos: React.PropTypes.array
};

export default TodoList;
