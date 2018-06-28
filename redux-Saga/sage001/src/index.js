import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';
import rootReducers from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();  //创建中间件


let store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// sagaMiddleware.run(watchIncrementAsync); //运行saga
sagaMiddleware.run(rootSaga); //运行saga
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
