import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/app'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminders from './Reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const store  = createStore(reminders)


ReactDOM.render(
 <Provider store={store}>
    <App/>
 </Provider>,document.getElementById("root")
)