import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as TaskActions, TasksView } from '../tasks';
import { Register } from '../user';
// console.log(TaskActions);
// console.log(TasksView);

const Home = ({ dispatch, tasks, tasksReducer }) => (
  <div id="todo-list">
    <h1> JUST AN H1 new TAG</h1>
    <TasksView tasks={tasks} actions={(bindActionCreators(TaskActions, dispatch))} />
    <Register />
  </div>
    );

Home.needs = [ TaskActions.getTasks ];
// Home.propTypes = {
//   todos:    PropTypes.any.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

Home.contextTypes = {
  muiTheme: React.PropTypes.object,
};

const mapStateToProps = ({ tasks, numbers, tasksReducer }) =>
  // const { todos, tasks, tasksReducer } = state;
   ({ tasks, numbers, tasksReducer });

export default connect(mapStateToProps)(Home);
