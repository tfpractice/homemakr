import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const Home = () => {
    return (
        <div id="homeDiv">
          <h1>
          I AM THE HOME DIV</h1>
        </div>
    );
};

const mapStateToProps = (state) => state;,
};

export default connect(mapStateToProps)(Home);
