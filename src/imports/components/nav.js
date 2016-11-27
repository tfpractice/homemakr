import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { actions as AuthActions, Register, Login, } from '../auth';

const Nav = ({ logout, }) => (
  <div className="nav">
    <h1> navigation </h1>
    <ul role="nav">
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <FlatButton label="logout" onClick={logout} />

    </ul>
  </div>
    );

Nav.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = state => state;

// export default connect(mapStateToProps)(Nav);
export default Nav;
