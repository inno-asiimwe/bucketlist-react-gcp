import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
  onSubmit(values) {
    const { id } = this.props.match.params;
    this.props.editBucketlist(id, values, () => {
      this.props.history.push('/');
    });
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
