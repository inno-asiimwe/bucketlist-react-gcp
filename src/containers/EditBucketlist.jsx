import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBucketlist, editBucketlist } from '../actions/action_bucketlist';
import UpdateBucketlistForm from './UpdateBucketList';


class EditBucketlist extends Component {
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
    const { bucketlist } = this.props;
    if (!bucketlist) {
      return <div> Loading...</div>;
    }
    const { name } = this.props.bucketlist;
    const { description } = this.props.bucketlist;
    return (
      <div>
           Edit bucketlist
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
  return { bucketlist: state.bucketlists[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getBucketlist, editBucketlist })(EditBucketlist);
