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

import { Card, CardActions, CardHeader, CardText, } from 'material-ui/Card';

const CardExampleExpandable = ({ task, editable, actions, }) => (
  <Card>
    <CardHeader
      title={task.text}
      subtitle={task.dateAdded}
      actAsExpander
      showExpandableButton
    />
    {editable ? <CardText expandable>
      <EditForm
        key={task.id}
        form={`edit_form${task.id}`}
        task={task}
        initialValues={task}
        onSubmit={actions.editTask(task)}
        onSubmitSuccess={resetForm(`edit_form${task.id}`)}
      /></CardText> : ''}
  </Card>
);

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
  return CardExampleExpandable({ task, editable, actions, });
  return (
    <li >
      <div className="collapsible-header">
        <p> task: {task.text} </p>
        {task.author.username ? <p> author: {task.author.username} </p> : null}

      </div>
      <div className="collapsible-body">
        {!editable ? '' :
        <EditForm
          key={task.id}
          form={`edit_form${task.id}`}
          task={task}
          initialValues={task}
          onSubmit={actions.editTask(task)}
          onSubmitSuccess={resetForm(`edit_form${task.id}`)}
        />
        }
      </div>
    </li>);
};

const Task = connect(mapStateToProps)(TaskC);

const TaskList = ({ actions, tasks, }) => (
  <List>
    {tasks.map((task, index) =>
      <Task key={index} task={task} actions={actions} />
    )}
  </List>
    );

export default TaskList;
