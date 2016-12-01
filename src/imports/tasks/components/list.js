import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import { reset, } from 'redux-form';
import TaskForm, { EditForm, } from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

{ /* <EditForm
  key={task.id}
  form={`edit_form${task.id}`}
  task={task}
  initialValues={task}
  onSubmit={actions.editTask(task)}
  onSubmitSuccess={resetForm(`edit_form${task.id}`)}
/> */ }
const mapStateToProps = ({ auth: { user, }, }, { task, }) =>
({ editable: user && task.author === user.id, });

const TaskC = ({ actions, task, user, editable, }) => {
  console.log('task editable', editable);
  if (editable) {
    return (
      <li className="collection-item">
        
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
      {task.author.username ? <p> author: {task.author.username} </p> : null}
    </li>);
};

const Task = connect(mapStateToProps)(TaskC);
const TaskList = ({ actions, tasks, }) => (
  <ul className="collection">
    {tasks.map((task, index) =>
      <Task key={index} task={task} actions={actions} />
      )}
  </ul>

    );

export default TaskList;
