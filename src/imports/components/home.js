import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { actions as TaskActions, TasksView, } from '../tasks';
import { actions as AuthActions, Register, Login, } from '../auth';

const Home = ({ dispatch, tasks, tasksReducer, children, }) => (
  <div id="todo-list">
    <h1> JUST AN H1 new TAG</h1>
    <TasksView tasks={tasks} actions={(bindActionCreators(TaskActions, dispatch))} />
    {/* <Register actions={(bindActionCreators(AuthActions, dispatch))} /> */}
    {/* <Login actions={(bindActionCreators(AuthActions, dispatch))} /> */}
    {children}
  </div>
    );

Home.needs = [TaskActions.getTasks,];

Home.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = ({ tasks, numbers, tasksReducer, auth, }) =>
   ({ tasks, auth, numbers, tasksReducer, });

export default connect(mapStateToProps)(Home);
