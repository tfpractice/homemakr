import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, } from 'material-ui/Toolbar';
import { Navbar, NavItem, Button, } from 'react-materialize';

import { Register, Login, } from '../modules/auth';
import { AuthActions, } from '../actions';
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

const mapStateToProps = state => state;

// export default connect(mapStateToProps)(Nav);
export default Nav;
