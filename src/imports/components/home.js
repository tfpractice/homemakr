import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div id="homeDiv">
    <h1>
          YASS BITCH YASSSS NO ?NODEMON</h1>
  </div>
    );

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
