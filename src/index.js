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
import EditBucketlist from './containers/EditBucketlist';
import ShowBucketlist from './containers/Bucketlist';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path = "/bucketlists/new" component={NewBucketlist}/>
          <Route path="/bucketlists/:id/edit" component={EditBucketlist}/>
          <Route path="/bucketlists/:id" component={ShowBucketlist} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

