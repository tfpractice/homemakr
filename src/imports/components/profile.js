import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';

const Profile = ({ user, }) => (
  <div className="profile">
    <h1> Welcome! </h1>
    <div className="profile__tasks">
      <h1>My tasks</h1>
    </div>
  </div>
    );

// Profile.needs = [ TaskActions.getTasks, ];

// Profile.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = ({ auth: { user, }, }) =>
   ({ user, });

export default connect(mapStateToProps)(Profile);
