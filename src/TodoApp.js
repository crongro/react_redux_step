import React, { Component } from 'react';
import './App.css'; 
import Todo from './Todo'
import Header from './Header'

class TodoApp extends Component {
  render() {
    return (
     <div>
      <Header />
      <Todo tododata={this.props.tododata}  dispatch={this.props.dispatch} />
     </div>
    );
  }
}

export default TodoApp;
