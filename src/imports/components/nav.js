import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { Login, } from './auth';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

const Nav = ({ logout, }) => (
  <Header fixed >
    <Title>
      <Link to="/"> HomeMakr</Link>
    </Title>
    <Box
      direction="row"
      justify="end"
      align="end"
    >
      <Link to="/register" >Register</Link>
      <Link to="/login" >Login</Link>
      <Login />
    </Box>
  </Header>

  );

Nav.contextTypes = { router: React.PropTypes.object, };

export default Nav;

// <div className="nav-wrapper"
  // <ul id="nav-mobile" className="right hide-on-small-only">
  //   <li><Link to="/register" >Register</Link></li>
  //   <li><Link to="/login" >Login</Link></li>
  //   <li><a onClick={logout}>Logout</a></li>
  // </ul>
  // </div>
