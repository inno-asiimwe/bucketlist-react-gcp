import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/action_auth';


class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser(() => { this.props.history.push('/login'); });
  }
  render() {
    return null;
  }
}

export default connect(null, { logoutUser })(Logout);
