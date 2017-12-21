/**
 * The component facilitates navigation amongest the components. 
 * */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/action_auth';
import SearchBar from '../containers/SearchBar';

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/home">BucketList App</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto navbar-right">
        <li className="nav-item active">
          <NavLink
            className="nav-link"
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          { props.auth.Authenticated ?
            <button type="btn" className="nav-link" onClick={() => props.logoutUser(() => props.history.push('/'))}>
              Logout
            </button>
          :
            <NavLink
              className="nav-link"
              to="/register"
            >
              Register
            </NavLink>
        }
        </li>
      </ul>
      {/* { props.auth.Authenticated &&
        <SearchBar />
      } */}
    </div>
  </nav>
);
// connecting the component to the store for its props
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logoutUser })(Nav);
