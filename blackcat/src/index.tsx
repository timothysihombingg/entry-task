import * as React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import postReducer from './modules/posts/reducer'

const store = createStore(postReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
