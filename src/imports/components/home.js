import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { actions as TaskActions, TasksView, } from '../tasks';
import { Button, Card, Row, Col, Icon, } from 'react-materialize';

const Home = ({ dispatch, tasks, tasksReducer, children, }) => (
  <div id="home">
    <TasksView actions={(bindActionCreators(TaskActions, dispatch))} />
    {children}
  </div>
    );

Home.needs = [ TaskActions.getTasks, ];

Home.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = ({ tasks, numbers, tasksReducer, auth, }) =>
   ({ tasks, auth, numbers, tasksReducer, });

export default connect(mapStateToProps)(Home);
