import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import { reset, } from 'redux-form';
import { Card, CardActions, CardHeader, CardText, } from 'material-ui/Card';

import TaskForm, { EditForm, } from './form';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

const CardExampleExpandable = ({ task, editable, actions, }) => {

};

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ auth: { user, }, }, { task, }) =>
    ({ editable: user && task.author === user.id, });

const TaskC = ({ actions, task, user, editable, }) => (editable ? <EditForm
  key={task.id}
  form={`edit_form${task.id}`}
  task={task}
  initialValues={task}
  onSubmit={actions.editTask(task)}
  onSubmitSuccess={resetForm(`edit_form${task.id}`)}
/> : '');

const Task = connect(mapStateToProps)(TaskC);

const TaskList = ({ actions, tasks, }) => (
  <Accordion openMulti>
    {tasks.map((task, index) =>
      <AccordionPanel key={task.id} heading={`title: ${task.text} `}>
        <Task key={task.id} task={task} actions={actions} />
      </AccordionPanel>)}

  </Accordion>

    );

export default TaskList;
