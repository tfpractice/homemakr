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
import { actions as AuthActions, Register, Login, } from '../auth';

const Nav = ({ logout, }) => (
  <AppBar
    style={{ display: 'inline-flex !important', }}
    title={<FlatButton
      containerElement={<Link to="/" />}
      label="HomeMakr"
    />}
  >
    <FlatButton containerElement={<Link to="/register" />} label="Register" />
    <FlatButton containerElement={<Link to="/login" />} label="Login" />
    <FlatButton label="logout" onClick={logout} />
  </AppBar>
    );

Nav.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = state => state;

// export default connect(mapStateToProps)(Nav);
export default Nav;
