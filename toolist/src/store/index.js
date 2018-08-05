import {createStore, applyMiddleware,compose} from 'redux';
import reducer from "./reducer.js";
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


// 既能使用redux-Devtools又能使用redux-thunk中间件，引入了compose，thunk.下面代码是在Github上看的
const composeEnhancers =
  typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store=createStore(reducer,enhancer);

sagaMiddleware.run(mySaga);

export default store;