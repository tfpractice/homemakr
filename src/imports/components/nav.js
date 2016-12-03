import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';

const Nav = ({ logout, }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/"> HomeMakr</Link>
      <ul id="nav-mobile" className="right hide-on-small-only">
        <li><Link to="/register" >Register</Link></li>
        <li><Link to="/login" >Login</Link></li>
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </div>
  </nav>);

Nav.contextTypes = { muiTheme: React.PropTypes.object, };

export default Nav;
