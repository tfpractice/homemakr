import React, { PropTypes, Component, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { reset, } from 'redux-form';
import TaskList from './list';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ auth: { user, }, tasks, tasksReducer: { filter, }, }) =>
 ({ tasks: tasks.filter(filter.func), canCreate: true && user, });

const TasksView = ({ tasks, actions, canCreate, }) => (
  <div className="tasks-list">
    <h1>
      TASKS
    </h1>
    {canCreate ? <TaskForm
      form={'newTaskForm'}
      onSubmit={actions.createTask}
      onSubmitSuccess={resetForm('newTaskForm')}
    /> : ''}

    <div className="row">
      <Tabs className="col m6">
        <Tab className="col m6" label="allTask">
          <TaskList actions={actions} tasks={tasks} />
        </Tab>
        <Tab className="col m6" label="completedTasks">
          <TaskList actions={actions} tasks={tasks.filter(t => t.completed)} />
        </Tab>
        <Tab className="col m6" label="privateTasks">
          <TaskList actions={actions} tasks={tasks.filter(t => t.private)} />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default connect(mapStateToProps)(TasksView);
