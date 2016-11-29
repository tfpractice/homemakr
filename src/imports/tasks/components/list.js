import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import { reset, } from 'redux-form';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const Task = ({ actions, task, user, }) => {
  if (task.author) {
    return (
      <ul className="collection">
        <div>
          <h2>{task.text}</h2>
          <h2>{task.author ? <p>task.author.username</p> : null}</h2>
          <a
            className="waves-effect waves-light btn"
            onClick={() => actions.deleteTask(task)}
          >
          Delete</a>

          <TaskForm
            key={task.id}
            form={`edit_form${task.id}`}
            initialValues={task}
            onSubmit={actions.editTask(task)}
            onSubmitSuccess={resetForm(`edit_form${task.id}`)}
          />
        </div>
      </ul>
    );
  }

  return (
    <li className="collection-item">
      {task.text} <p> author: {task.author} </p>
    </li>);
};

const TaskList = ({ actions, tasks, }) => (
  <ul className="collection">
    {tasks.map((task, index) =>
      <Task key={index} task={task} actions={actions} />
      )}
  </ul>

    );

export default TaskList;
