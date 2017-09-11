import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import todoReducer from './reducer/todoReducer';
import mySaga from './sagas'

import { Provider } from 'react-redux'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)


const render = () => { 
	ReactDOM.render(
		<Provider store={store}>
   		<TodoApp />
   	</Provider>,
   document.querySelector("#wrap")
  );
}

//store가 변경되면 view component를 다시 렌더링하도록 등록.
store.subscribe(render);

render();

registerServiceWorker();