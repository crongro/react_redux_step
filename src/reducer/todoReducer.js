const initialState = {
  todos : [],
  completeList : [],
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADDTODO':
      return {...state, todos : [...state.todos, action.todo]};
    case 'DATA_FETCH_SUCCEEDED':
      return action.data;
    default: 
      return state;
  }
}

export default todoReducer;
