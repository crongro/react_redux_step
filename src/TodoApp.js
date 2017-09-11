import React, { Component } from 'react';
import './App.css'; 
import Todo from './Todo'
import Header from './Header'

import { connect } from 'react-redux';
import * as actions from './action/todo'

const mapStateToProps = (state) => {
  return {
    tododata : state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(evt) {
    	dispatch(actions.addTodo(evt.target.previousSibling.value));
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);


class TodoApp extends Component {
  render() {
    return (
     <div>
      <Header />
      <TodoContainer />
     </div>
    );
  }
}

export default TodoApp;
