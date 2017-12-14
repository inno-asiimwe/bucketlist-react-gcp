import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../config/store';
import Home from './Home';
import RegisterUser from '../containers/SignupForm';
import LoginUser from '../containers/LoginForm';
import NewBucketlist from '../containers/NewBucketlist';
import EditBucketlist from '../containers/EditBucketlist';
import ShowBucketlist from '../containers/Bucketlist';
import NewItem from '../containers/NewBucketlistItem';
import EditBucketlistItem from '../containers/EditBucketlistItem';
import Nav from './NavBar';
import Logout from '../containers/Logout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/bucketlists/:id/:itemid/edit" component={EditBucketlistItem} />
          <Route exact path="/bucketlists/new" component={NewBucketlist} />
          <Route exact path="/bucketlists/:id/edit" component={EditBucketlist} />
          <Route path="/bucketlists/:id/new" component={NewItem} />
          <Route path="/bucketlists/:id" component={ShowBucketlist} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;
