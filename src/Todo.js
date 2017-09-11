import ListView from './ListView';
import React, { Component } from 'react';

export default class Todo extends React.Component {
  
  constructor() {
    super();
  }
    
  addTodo(dispatch, evt) {
    console.log('log', evt, dispatch);
    dispatch({
      type: 'ADDTODO',
      todo : evt.target.previousSibling.value
    })            
  }
  

  render() {
    let {tododata, dispatch} = this.props;
    
    return (
      <div>
        <div>
         <input type="text" placeholder="할일입력" />
         <button onClick={this.addTodo.bind(this, dispatch)}> 추가 </button>
        </div>
        <div>
          <ListView data={tododata} />
        </div>
      </div>
    )
  }
}
