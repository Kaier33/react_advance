import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//components
import NavigationBar from './components/NavigationBar'

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


const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavigationBar />
                {routes}
            </Fragment>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
