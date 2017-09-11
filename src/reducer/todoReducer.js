const initialState = {
  todos : [],
  completeList : [],
};

const todoReducer = (state = initialState, action) => {
  console.log(state, action);
  switch(action.type) {
    case 'ADDTODO':
      return {...state, todos : [...state.todos, action.todo]};
    default: 
      return state;
  }
}

export default todoReducer;
