import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/style.css';
import store from '../src/config/store';
import App from './containers/App';
import RegisterUser from './containers/SignupForm';


ReactDOM.render(
    <Provider store={ store }>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/login" component={RegisterUser} />
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

