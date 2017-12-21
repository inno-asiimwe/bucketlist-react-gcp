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
    this.props.getBucketlist(id);
  }
  onSubmit(values) {
    const { id } = this.props.match.params;
    const { itemid } = this.props.match.params;
    this.props.editItem(id, itemid, values, () => {
      this.notify_success(id);
    }, () => {this.notify_error();});
  }
  notify_success = (id) => {
    toast.success("Success", { onClose: () => this.props.history.push(`/bucketlists/${id}`), autoClose: 1000});
  }
  notify_error = () => {
    toast.error("Failed, make sure the name is unique");
  }
  render() {
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }

    const { item } = this.props;

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

function mapStateToProps(state, ownProps) {
  return (
    {
      item: state.bucketlists[ownProps.match.params.id].items[ownProps.match.params.itemid],
      auth: state.auth
    }
  );
}

export default connect(mapStateToProps, { getBucketlist, editItem })(EditBucketlistItem);
