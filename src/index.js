import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from'./reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from'./store/configureStore';
import './index.css';
import App from './App';
import {loadIssues} from './actions/IssueActions';

const store=configureStore();
store.dispatch(loadIssues());


ReactDOM.render(
    <Provider store = {store}>
    <App/>,
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();