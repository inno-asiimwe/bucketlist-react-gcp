import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import { clearMessages } from '../actions/action_auth';
import { getBucketlists, deleteBucketlist } from '../actions/action_bucketlist';

export class BucketLists extends Component {
  constructor(props) {
    super(props);
    this.renderBucketlists = this.renderBucketlists.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.notify = this.notify.bind(this);
  }
  componentDidMount() {
    this.props.getBucketlists();
  }
  onDelete(id) {
    this.props.deleteBucketlist(id);
  }
  notify = (msg) => {
    toast(msg);
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
    if (this.props.auth.success) {
      this.notify(this.props.auth.success_msg);
      this.props.clearMessages();
    }
    return (
      <div className="container">
        <ToastContainer />
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
  return { bucketlists: state.bucketlists, auth: state.auth };
}
export default connect(
  mapStateToProps,
  { getBucketlists, deleteBucketlist, clearMessages }
)(BucketLists);
