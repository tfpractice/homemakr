import React, { PropTypes, Component, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'react-materialize';
import TaskList from './list';
import FilterLink from './filter_link';
import { FILTER_FUNCS, } from '../constants';

import { reset, } from 'redux-form';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
import { connect, } from 'react-redux';

const mapStateToProps = ({ tasks, tasksReducer: { filter, }, }) => {
  console.log('isdie the component', filter);
  return ({ tasks: tasks.filter(filter.func), });
};

const TasksView = ({ tasks, actions, }) => (
  <div className="tasks-list">
    <button
      className="waves-effect waves-light btn"
      onClick={() => actions.setTaskFilter('SHOW_COMPLETED_TASKS')}
    >SHOW_COMPLETED_TASKS</button>
    <TaskForm
      form={'newTaskForm'}
      onSubmit={actions.createTask}
      onSubmitSuccess={resetForm('newTaskForm')}
    />
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <FilterLink href="#publicTasks" actions={actions} filter="SHOW_ALL_TASKS" >
              SHOW_ALL_TASKS
            </FilterLink>
          </li>
          <li className="tab col s3">
            <FilterLink href="#completedTasks" actions={actions} filter="SHOW_COMPLETED_TASKS" >
              SHOW_COMPLETED_TASKS
            </FilterLink>
          </li>
          <li className="tab col s3 disabled">
            <a href="#editTasks">Edit Tasks</a>
          </li>
        </ul>
      </div>
      <TaskList actions={actions} tasks={tasks} />

    </div>
  </div>);

export default connect(mapStateToProps)(TasksView);

//
// <div id="publicTasks" className="col s12">
//   <TaskList actions={actions} tasks={tasks} />
// </div>
// <div id="completedTasks" className="col s12">
//   <TaskList actions={actions} tasks={tasks.filter(t => t.completed)} />
// </div>
// <div id="editTasks" className="col s12">
//   <TaskList actions={actions} tasks={tasks.filter(t => t.author)} />
// </div>
