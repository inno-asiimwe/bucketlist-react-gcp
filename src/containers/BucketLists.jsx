import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getBucketlists, deleteBucketlist } from '../actions/action_bucketlist';

class BucketLists extends Component {
  constructor(props) {
    super(props);
    this.renderBucketlists = this.renderBucketlists.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    this.props.getBucketlists();
  }
  onDelete(id) {
    this.props.deleteBucketlist(id);
  }
  renderBucketlists() {
    return _.map(this.props.bucketlists, bucketlist => (
      <tr>
        <td>
          <Link className="text-xs-left" to={`/bucketlists/${bucketlist.id}`}>
            {bucketlist.name}
          </Link>
        </td>
        <td>
          <Link className="btn btn-success" to={`/bucketlists/${bucketlist.id}`}>
                OPEN
          </Link>
        </td>
        <td>
          <Link className="btn btn-primary" to={`/bucketlists/${bucketlist.id}/edit`}>
                EDIT
          </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.onDelete(bucketlist.id)} >
                DELETE
          </button>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="text-right">
            <Link className="btn btn-primary" to="/bucketlists/new">
              Add a bucketlist
            </Link>
          </div>
          <h3>Bucketlists table</h3>
          <table className="table table-bordered">
            <tbody>
              {this.renderBucketlists()}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { bucketlists: state.bucketlists };
}
export default connect(
  mapStateToProps,
  { getBucketlists, deleteBucketlist }
)(BucketLists);
