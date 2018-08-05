import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './store';

import {Provider} from 'react-redux';


//声明一个组件，此为App组件
const App=(
	<Provider store={store}>
		<TodoList />
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'));