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
    this.props.getBucketlist(id);
  }
  notify_success = () => {
    toast.success("Bucketlist has been updated!", {onClose: () => { this.props.history.push('/') }, autoClose: 1000});
  }
  notify_error = () => {
    toast.error("Update Failed, Ensure name is unique");
  }
  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.editBucketlist(id, values, () => {
      this.notify_success();
    }, () => {this.notify_error()});
  }
  render() {
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }
    const { bucketlist } = this.props;
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

function mapStateToProps(state, ownProps) {
  return (
    {
      bucketlist: state.bucketlists[ownProps.match.params.id],
      auth: state.auth
    }
  );
}

export default connect(mapStateToProps, { getBucketlist, editBucketlist })(EditBucketlist);
