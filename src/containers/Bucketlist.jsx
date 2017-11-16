import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBucketlist } from '../actions/action_bucketlist';

class ShowBucketlist extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBucketlist(id);
  }
  render() {
    return (
      <div>
          Bucketlist
      </div>
    );
  }
}

export default connect(null, { getBucketlist })(ShowBucketlist);
