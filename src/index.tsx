import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './statics/iconfont/iconfont.css';
import { compose ,createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSage from './sagas';


declare var window: any;
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,sagaMiddleware)));
sagaMiddleware.run(rootSage);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
