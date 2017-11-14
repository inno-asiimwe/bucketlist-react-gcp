import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getBucketlists } from '../actions/action_bucketlist';

class BucketLists extends Component {
  componentDidMount() {
    this.props.getBucketlists();
  }
  renderBucketlists() {
    return _.map(this.props.bucketlists, (bucketlist) => {
      return (
        <li className="list-group-item clearfix" key={bucketlist.id}>
          <Link className="text-xs-left" to={`/bucketlists/${bucketlist.id}`}>
            {bucketlist.name}
          </Link>
          <Link className="btn btn-success" to="#">
            OPEN
          </Link>
          <Link className="btn btn-primary" to="#">
            EDIT
          </Link>
          <Link className="btn btn-danger" to="#">
            DELETE
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="text-right">
            <Link className="btn btn-primary" to="#">
                Add a bucketlist
            </Link>
        </div>
        <h3>Bucketlists table</h3>
        <ul className="list-group">
          {this.renderBucketlists()}
        </ul>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { bucketlists: state.bucketlists };
}
export default connect(mapStateToProps, { getBucketlists })(BucketLists);
