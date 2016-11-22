import React, { PropTypes } from 'react';
// import { TasksView } from '../tasks';
import { bindActionCreators } from 'redux';
import { actions as TaskActions, TasksView } from '../tasks';
import { connect } from 'react-redux';

const Home = ({ dispatch, tasks, tasksReducer }) => (
  <div id="todo-list">
    <h1> JUST AN H1 new TAG</h1>
    <TasksView tasks={tasks} actions={(bindActionCreators(TaskActions, dispatch))} />
  </div>
    );

Home.needs = [ TaskActions.getTasks ];
// Home.propTypes = {
//   todos:    PropTypes.any.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

// Home.contextTypes = {
//   muiTheme: React.PropTypes.object,
// };

const mapStateToProps = ({ tasks, numbers }) =>
  // const { todos, tasks, tasksReducer } = state;
   ({ tasks, numbers });

export default connect(mapStateToProps)(Home);
