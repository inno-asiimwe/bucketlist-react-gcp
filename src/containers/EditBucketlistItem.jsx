/** Component responsible for editing bucketlist items */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getBucketlist, editItem } from '../actions/action_bucketlist';
import UpdateBucketlistForm from '../components/UpdateBucketList';


export class EditBucketlistItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // Dispatch action to fetch the current bucketlist again
    this.props.getBucketlist(id);
  }

  /**
   * Function submits values from the form.
   * @param {object} values - new values for name and description of the current item
   */
  onSubmit(values) {
    const { id } = this.props.match.params;
    const { itemid } = this.props.match.params;
    // Dispatch action to update the current item and display appropriate toasts
    this.props.editItem(id, itemid, values, () => {
      this.notify_success(id);
    }, () => {this.notify_error();});
  }

  /**
   * Function displays a success toast.
   * @param {id} - id of the current bucketlist.
   */
  notify_success = (id) => {
    toast.success("Success", { onClose: () => this.props.history.push(`/bucketlists/${id}`), autoClose: 1000});
  }

  /**
   * Function displays an error toast.
   */
  notify_error = () => {
    toast.error("Failed, make sure the name is unique");
  }

  render() {
    // Redirect unauthenticated Users to login page.
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }

    const { item } = this.props;

    // Show loading if action fetching items is not yet resolved
    if (!item) {
      return <div> Loading...</div>;
    }

    const { name } = this.props.item;
    const { description } = this.props.item;

    return (
      <div>
        <ToastContainer />
        <UpdateBucketlistForm
          initialValues={{ name, description }}
          onSubmit={this.onSubmit}
          entity="Item"
          returnTo={`/bucketlists/${this.props.match.params.id}`}
        />
      </div>
    );
  }
}

/**
 * Function maps component props to 
 * @param {object} state - Application state
 * @param {object} ownProps - Component props
 */
function mapStateToProps(state, ownProps) {
  return (
    {
      item: state.bucketlists[ownProps.match.params.id].items[ownProps.match.params.itemid],
      auth: state.auth
    }
  );
}

// Connect component to redux store and export it as the default.
export default connect(mapStateToProps, { getBucketlist, editItem })(EditBucketlistItem);
