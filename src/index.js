import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/style.css';
import store from '../src/config/store';
import App from './containers/App';
import RegisterUser from './containers/SignupForm';
import LoginUser from './containers/LoginForm';
import NewBucketlist from './containers/NewBucketlist';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path = "/bucketlists/new" component={NewBucketlist}/>
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

