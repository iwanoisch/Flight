import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import {history, store} from "./Store/CreateStore";
import {initApp} from "./Core/Actions/InitActions";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

export const initCoreApp = (store = {}, history = {}) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.dispatch(initApp());
initCoreApp(store, history);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
