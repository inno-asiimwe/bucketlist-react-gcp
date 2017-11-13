import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/action_auth';


const App = (props) => { 
  if (!props.auth.Authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <button onClick={() => props.logoutUser()}>
        Logout
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(App);
