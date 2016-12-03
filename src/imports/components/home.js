import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Button, Card, Row, Col, Icon, } from 'react-materialize';
import { TasksView, } from '../modules/tasks';
import { TaskActions, } from '../actions';

const mapStateToProps = ({ tasks, numbers, tasksReducer, auth, }) =>
   ({ tasks, auth, numbers, tasksReducer, });

const Home = ({ dispatch, tasks, tasksReducer, children, }) => (
  <div id="home">
    <TasksView actions={(bindActionCreators(TaskActions, dispatch))} />
    {children}
  </div>
    );

Home.needs = [ TaskActions.getTasks, ];

Home.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect(mapStateToProps)(Home);
