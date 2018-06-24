import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//components
import NavigationBar from './components/NavigationBar';
import FlashMessageList from './components/flash/FlashMessageList'

// dev-pulgins
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

// main
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes';
import rootReducers from './reducers';

//action
import { setCurrentUser } from './actions/authActions'

// utils
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode'


const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
)

// 检查是否有登录状态
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken)  //如果有,设置头
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken))) //通过本地存储的让redux去记录登录状态和一些用户信息
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavigationBar />
                <FlashMessageList />
                {routes}
            </Fragment>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
