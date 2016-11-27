import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import { reset, } from 'redux-form';
import TaskForm from './form';

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
          leftCheckbox={<Checkbox
            onCheck={(e, completed) => {
              console.log('checked');
              actions.editTask(task)({ completed, });
            }}
          />}
          nestedItems={[
            <ListItem>
              <TaskForm
                key={task.id}
                form={`edit_form${task.id}`}
                initialValues={task}
                onSubmit={actions.editTask(task)}
                onSubmitSuccess={resetForm(`edit_form${task.id}`)}
              />
            </ListItem>,
          ]}
        >
          <div>{task.text}
            <FlatButton
              label="Delete" data-id={index}
              onClick={() => actions.deleteTask(task)}
            />
          </div>
        </ListItem>)}
    </List>
  </div>);

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;
