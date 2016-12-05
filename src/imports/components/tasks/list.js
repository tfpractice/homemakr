import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import { EditForm, } from './form';

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
