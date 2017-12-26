/** Component displays all the bucketlists for a given user */
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
    // Fetch bucketlists for the current page, initial page is 1.
    this.props.getBucketlists(this.props.current);
  }

  /**
   * Function called on click of the delete button.
   * @param {number} id - id of the selected bucketlist.
   */
  onDelete(id) {
    // Dispatch action to delete the selected bucketlist.
    this.props.deleteBucketlist(id, () => this.props.getBucketlists(this.props.current));
  }
  
  /**
   * Function toasts appropriate message to the user.
   */
  notify = (msg) => {
    toast(msg);
  }

  /**
   * Function fetches the next page.
   */
  toNextPage() {
    // Dispatch action to fetch the next page of bucketlists from the API.
    this.props.getBucketlists(this.props.next);
  }

  /**
   * Function fetches the previous page.
   */
  toPrevPage() {
    // Dispatch action to fetch the previous page of bucketlists from API.
    this.props.getBucketlists(this.props.prev);
  }

  /**
   * Function performs a serch for bucketlists with a given term in the name.
   * @param {string} term - term to be searched for.
   */
  bucketlistSearch(term){
    // Dispatch action to search at API level.
    this.props.searchBucketlists(term);
  }

  /**
   * Functions laysout the returned bucketlists in a tabular manner.
   */
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
    // Toast a success message on successful login
    if (this.props.auth.success) {
      this.notify(this.props.auth.success_msg);
      this.props.clearMessages();
    }
    
    // Delay Search function by 300 milliseconds to avoid a search on every key stroke.
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
            hasNext={this.props.hasNext}
            hasPrev={this.props.hasPrev}
          />
        </div>
      </div>

    );
  }
}

/**
 * Function maps component props to the application state.
 * @param {object} state - application state.
 */
function mapStateToProps(state) {
  return {
    bucketlists: state.bucketlists.items,
    auth: state.auth,
    pages: state.bucketlists.totalpages,
    current: state.bucketlists.currentpage,
    next: state.bucketlists.nextpage,
    prev: state.bucketlists.prevpage,
    hasNext: state.bucketlists.has_next,
    hasPrev: state.bucketlists.has_prev
   };
}
// Connect component to redux store.
export default connect(
  mapStateToProps,
  { getBucketlists, deleteBucketlist, clearMessages, searchBucketlists }
)(BucketLists);
