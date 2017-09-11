import ListView from './ListView';
import React from 'react';

export default class Todo extends React.Component {
  render() {
    let {tododata, addTodo} = this.props;
    
    return (
      <div>
        <div>
         <input type="text" placeholder="할일입력" />
         <button onClick={addTodo}> 추가 </button>
        </div>
        <div>
          <ListView data={tododata} />
        </div>
      </div>
    )
  }
}
