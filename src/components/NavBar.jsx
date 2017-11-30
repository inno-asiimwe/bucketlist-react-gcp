import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-default bg-primary">
    <span className="navbar-brand" href="#">Bucketlist App</span>
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
