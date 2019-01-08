import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './containers/App';
// import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'

const store = configureStore({})


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
