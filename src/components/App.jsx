import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/action_auth';
import BucketLists from '../containers/BucketLists';


const App = (props) => {
  if (!props.auth.loaded) {
    return <div>Loading...</div>;
  }
  if (!props.auth.Authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <button onClick={() => props.logoutUser(() => props.history.push('/'))}>
        Logout
      </button>
      <BucketLists />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(App);
