import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getBucketlist, deleteBucketlistItem } from '../actions/action_bucketlist';

export class ShowBucketlist extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBucketlist(id);
  }
  onDelete(bucketlistId, itemId) {
    this.props.deleteBucketlistItem(
      bucketlistId,
      itemId,
      () => this.props.getBucketlist(bucketlistId)
    );
  }
  renderItems(id) {
    return _.map(this.props.bucketlist.items, item => (
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
    const { bucketlist } = this.props;

    if (!bucketlist) {
      return <div>Loading ...</div>;
    }
    const { name } = bucketlist;
    const { description } = bucketlist;
    const { id } = bucketlist;
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
function mapStateToProps(state, ownProps) {
  return { bucketlist: state.bucketlists[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { getBucketlist, deleteBucketlistItem })(ShowBucketlist);
