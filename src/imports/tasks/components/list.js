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
    return (<ListItem
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
        {task.author ? <p>task.author.username</p> : null}
        <FlatButton
          label="Delete"
          onClick={() => actions.deleteTask(task)}
        />
      </div>
    </ListItem>
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
