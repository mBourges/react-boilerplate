import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTodoList } from './selectors';
import { fetchTodos } from './actions';
import TodoInput from '../../components/todoInput';
import TodoList from '../../components/todoList';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };

    this.inputNewTodo = this.inputNewTodo.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  inputNewTodo(value) {
    this.setState({
      newTodo: value
    });
  }

  render() {
    return (<div>
      <h1>Todos</h1>
      <div className="ui input">
        <TodoInput
          type="text"
          onChange={ this.inputNewTodo }
          placeholder="New Todo"
        />
      </div>
      <TodoList todos={ this.props.todos } />
    </div>);
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array,
  getTodos: React.PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodoList()
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
