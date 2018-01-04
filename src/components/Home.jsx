/** The Home component optionally renders the Bucketlists Component or Redirects to Login */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/action_auth';
import BucketLists from '../containers/BucketLists';


export const Home = (props) => {
  // Show loading incase login action not yet resolved
  if (!props.auth.loaded) {
    return <div>Loading...</div>;
  }
  // Redirect to login incase user is not authenticated
  if (!props.auth.Authenticated) {
    return <Redirect to="/login" />;
  }
  // Render Bucketlists for authenticated users
  return (
    <div>
      <BucketLists callback={() => this.props.history.push('/')} />
    </div>
  );
};
/**
 * function maps state to component props
 * @param {object} state - application state
 */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
// connect the component to redux store
export default connect(mapStateToProps, { logoutUser })(Home);
