import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getBucketlist } from '../actions/action_bucketlist';

class ShowBucketlist extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBucketlist(id);
  }
  renderItems() {
    return _.map(this.props.bucketlist.items, item => (
      <tr>
        <td>
          {item.name}
        </td>
        <td>
          <Link className="btn btn-primary" to="#">
                Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger">
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
    return (
      <div className="jumbotron">
        <div>
          <div className="float-left">
            <Link className="btn btn-primary" to="/" >Back to Bucketlists</Link>
          </div>
          <div className="float-right text-right">
            <Link className="btn btn-primary" to="#" >Add Bucketlist item</Link>
          </div>
        </div>
        <div>
          <h3>{name} </h3>
          <p>description: {description}</p>
          <h4>{`items in ${name}`}</h4>
          <table className="table">
            <tbody>
              {this.renderItems()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return { bucketlist: state.bucketlists[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { getBucketlist })(ShowBucketlist);
