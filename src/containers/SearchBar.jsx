/**
 * Component handles making search quieries
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  /**
   * Function handles typing into the search form
   * @param {string} term - term typed into the search form
   */
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Bucketlists"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </form>
    );
  }
}

