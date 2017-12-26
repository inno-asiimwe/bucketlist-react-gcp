/** Component displays items in a given bucketlist */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { getBucketlistItem, deleteBucketlistItem } from '../actions/action_bucketlist';

export class ShowBucketlist extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // Dispatch action to fetch a single bucketlist
    this.props.getBucketlistItem(id, this.props.current);
  }

  /**
   * Function executed on click of the delete button
   * @param {number} bucketlistId - id of the current bucketlist.
   * @param {number} itemId - id of the item to delete
   */
  onDelete(bucketlistId, itemId) {
    // Dispatch action to delete item from bucketlist.
    this.props.deleteBucketlistItem(
      bucketlistId,
      itemId,
      () => this.props.getBucketlistItem(bucketlistId, this.props.current)
    );
  }

  /**
   * Function laysout items in a tabular way
   * @param {number} id - id of the current bucketlist
   */
  renderItems(id) {
    return _.map(this.props.items, item => (
      <tr>
        <td>
          {item.name}
        </td>
        <td>
          <Link className="btn btn-primary" to={`/bucketlists/${id}/${item.id}/edit`}>
                Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.onDelete(id, item.id)}>
                Delete
          </button>
        </td>
      </tr>
    ));
  }
  render() {
    const { items } = this.props;

    // Redirect to login for unauthenticated users
    if (!this.props.auth.Authenticated) {
      return <Redirect to="/login" />;
    }

    // Show loading incase the api call is not yet resolved
    if (!items) {
      return <div>Loading ...</div>;
    }
    if (!this.props.bucketlist) {
      return <div>Loading ...</div>;
    }

    const { name } = this.props.bucketlist;
    const { description } = this.props.bucketlist;
    const { id } = this.props.bucketlist;

    return (
      <div className="container">
        <div className="jumbotron">
          <div>
            <div className="float-left">
              <Link className="btn btn-primary" to="/" >Back to Bucketlists</Link>
            </div>
            <div className="float-right text-right">
              <Link className="btn btn-primary" to={`/bucketlists/${id}/new`} >Add Bucketlist item</Link>
            </div>
          </div>
          <div>
            <h3>{name} </h3>
            <p>description: {description}</p>
            <h4>{`items in ${name}`}</h4>
            <table className="table">
              <tbody>
                {this.renderItems(id)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * Function maps component props to application state.
 * @param {object} state - application state
 * @param {object} ownProps - component props
 */
function mapStateToProps(state) {
  return {
    items: state.bucketlists.items,
    bucketlist: state.bucketlists.bucketlist,
    auth: state.auth,
    pages: state.bucketlists.totalpages,
    current: state.bucketlists.currentpage,
    next: state.bucketlists.nextpage,
    prev: state.bucketlists.prevpage
  };
}
// export the connected component as default
export default connect(
  mapStateToProps,
  { getBucketlistItem, deleteBucketlistItem }
)(ShowBucketlist);
