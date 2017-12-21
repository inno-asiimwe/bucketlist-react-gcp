import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import { clearMessages } from '../actions/action_auth';
import { getBucketlists, deleteBucketlist, searchBucketlists } from '../actions/action_bucketlist';
import Paginate from '../components/paginate';
import SearchBar from '../containers/SearchBar';

export class BucketLists extends Component {
  constructor(props) {
    super(props);
    this.renderBucketlists = this.renderBucketlists.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.notify = this.notify.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
  }
  componentDidMount() {
    this.props.getBucketlists(this.props.current);
  }
  onDelete(id) {
    this.props.deleteBucketlist(id, () => this.props.getBucketlists(this.props.current));
  }
  notify = (msg) => {
    toast(msg);
  }
  toNextPage() {
    this.props.getBucketlists(this.props.next);
  }
  toPrevPage() {
    this.props.getBucketlists(this.props.prev);
  }
  bucketlistSearch(term){
    this.props.searchBucketlists(term);
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
    const bucketlistSearch = _.debounce((term) => { this.bucketlistSearch(term)}, 300)
    return (
      <div className="container">
        <ToastContainer />
        <div>
          <SearchBar onSearchTermChange={bucketlistSearch} />
        </div>
        <div className="jumbotron">
          <div className="text-right">
            <Link className="btn btn-primary" to="/bucketlists/new">
              Add a bucketlist
            </Link>
          </div>
          <div className="text-left">
          </div>
          <h3>Bucketlists table</h3>
          {this.props.pages == 0 && 
            <div> No Bucketlists found</div>
          }
          <table className="table table-bordered">
            <tbody>
              {this.renderBucketlists()}
            </tbody>
          </table>
          <Paginate 
            page={this.props.current}
            pages={this.props.pages}
            onNext={this.toNextPage}
            onPrev={this.toPrevPage}
          />
        </div>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    bucketlists: state.bucketlists.items,
    auth: state.auth,
    pages: state.bucketlists.totalpages,
    current: state.bucketlists.currentpage,
    next: state.bucketlists.nextpage,
    prev: state.bucketlists.prevpage
   };
}
export default connect(
  mapStateToProps,
  { getBucketlists, deleteBucketlist, clearMessages, searchBucketlists }
)(BucketLists);
