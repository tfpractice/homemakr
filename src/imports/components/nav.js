import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { Login, Register, } from './auth';

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
      className="right hide-on-small-only"
    >
      <Register />
      <Login />
      <button className="waves-effect waves-green btn-flat " onClick={logout}>Logout</button>
    </Box>
  </Header>

  );

Nav.contextTypes = { router: React.PropTypes.object, };

export default Nav;
