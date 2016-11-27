import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { reset, } from 'redux-form';
import TaskForm from './form';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const TasksView = ({ tasks, actions, }) => (
  <div className="tasks-list">
    <TaskForm
      form={'newTaskForm'}
      onSubmit={actions.createTask}
      onSubmitSuccess={resetForm('newTaskForm')}
    />
    <List>
      {tasks.map((task, index) =>
        <ListItem
          key={index}
          primaryText={<div>
            <span>{task.text}</span>
            <FlatButton
              label="Delete" data-id={index}
              onClick={() => actions.deleteTask(task)}
            />
          </div>}
          nestedItems={[
            <TaskForm
              key={task.id}
              form={`edit_form${task.id}`}
              initialValues={task}
              onSubmit={actions.editTask(task)}
              onSubmitSuccess={resetForm(`edit_form${task.id}`)}
            />,
          ]}
        />)}

    </List>
  </div>);

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;
