import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import todoReducer from './reducer/todoReducer';

import { Provider } from 'react-redux'

const store = createStore(todoReducer);

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