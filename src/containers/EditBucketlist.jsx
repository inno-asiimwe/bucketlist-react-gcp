/** Component handles editing a bucketlist */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getBucketlist, editBucketlist } from '../actions/action_bucketlist';
import UpdateBucketlistForm from '../components/UpdateBucketList';


export class EditBucketlist extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // Fetch a bucketlist to incorporate any changes after the last fetch.
    this.props.getBucketlist(id);
  }

  /**
   * Function displays a success toast.
   */
 
  notify_success = () => {
    toast.success("Bucketlist has been updated!", {onClose: () => { this.props.history.push('/') }, autoClose: 1000});
  }

  /**
   * Function displays an error toast.
   */
  notify_error = () => {
    toast.error("Update Failed, Ensure name is unique");
  }

  /**
   * Function submits values from the form.
   * @param {object} values - new values for name and description.
   */
  onSubmit(values) {
    const { id } = this.props.match.params;
    // Dispatch actions to edit a bucketlist and also display appropriate toast.
    this.props.editBucketlist(id, values, () => {
      this.notify_success();
    }, () => {this.notify_error()});
  }
  render() {
    // Redirect unauthenticated users to the login page.
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }
    const { bucketlist } = this.props;
    // Show loading incase action fetching bucketlists is not resolved yet.
    if (!bucketlist) {
      return <div> Loading...</div>;
    }

    const { name } = this.props.bucketlist;
    const { description } = this.props.bucketlist;
    return (
      <div>
        <ToastContainer />
        <UpdateBucketlistForm
          initialValues={{ name, description }}
          onSubmit={this.onSubmit}
          entity="Bucketlist"
          returnTo="/"
        />
      </div>
    );
  }
}
/**
 * Function maps component props to application state.
 * @param {object} state - application state.
 * @param {object} ownProps - component props.
 */
function mapStateToProps(state, ownProps) {
  return (
    {
      bucketlist: state.bucketlists[ownProps.match.params.id],
      auth: state.auth
    }
  );
}

// Export connected component as the default.
export default connect(mapStateToProps, { getBucketlist, editBucketlist })(EditBucketlist);
