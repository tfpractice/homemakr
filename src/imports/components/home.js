import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as TaskActions, TasksView } from '../tasks';
import { Register } from '../user';

const Home = ({ dispatch, tasks, tasksReducer }) => (
  <div id="todo-list">
    <h1> JUST AN H1 new TAG</h1>
    <TasksView tasks={tasks} actions={(bindActionCreators(TaskActions, dispatch))} />
    <Register />
  </div>
    );

Home.needs = [ TaskActions.getTasks ];

Home.contextTypes = {
  muiTheme: React.PropTypes.object,
};

const mapStateToProps = ({ tasks, numbers, tasksReducer }) =>

   ({ tasks, numbers, tasksReducer });

export default connect(mapStateToProps)(Home);
