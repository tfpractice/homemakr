import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import { reset, } from 'redux-form';
import TaskForm, { EditForm, } from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const Task = ({ actions, task, user, }) => {
  console.log('task render', task);
  if (task.author) {
    return (
      <li className="collection-item">
        <p>{task.text}</p>
        <p>{task.author.username}</p>
        <a
          className="waves-effect waves-light btn"
          onClick={() => actions.deleteTask(task)}
        >
        Delete</a>

        <EditForm
          key={task.id}
          form={`edit_form${task.id}`}
          task={task}
          initialValues={task}
          onSubmit={actions.editTask(task)}
          onSubmitSuccess={resetForm(`edit_form${task.id}`)}
        />
      </li>
    );
  }

  return (
    <li className="collection-item">
      <p> task: {task.text} </p>
      {task.author ? <p> author: {task.author.username} </p> : null}
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
