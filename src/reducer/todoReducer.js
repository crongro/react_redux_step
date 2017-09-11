const initialState = {
  todos : [],
  completeList : [],
};

const todoReducer = (state = initialState, action) => {
  console.log(state, action);
  switch(action.type) {
    case 'ADDTODO':
      return [...state, action.todo];
    dafault: 
      return state;
  }
}

export default todoReducer;
