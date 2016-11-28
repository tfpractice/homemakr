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

import { actions as AuthActions, Register, Login, } from '../auth';

const Nav = ({ logout, }) => (
  <AppBar
    title={<Link to="/" >HomeMakr</Link>}
    iconElementRight={
      <ToolbarGroup >
        <FlatButton label={<Link to="/register" >Register</Link>} />
        <FlatButton label={<Link to="/login" >Login</Link>} />
        <FlatButton label="logout" onClick={logout} />
      </ToolbarGroup>}
  />
    );

Nav.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = state => state;

// export default connect(mapStateToProps)(Nav);
export default Nav;
