import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'react-materialize';
import TaskList from './list';
import $ from 'jquery';

// window.$ = window.JQuery = $ = require('jquery');

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
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a href="#publicTasks">Public Tasks</a>
          </li>
          <li className="tab col s3">
            <a href="#completedTasks">completedTasks</a>
          </li>
          <li className="tab col s3 disabled">
            <a href="#editTasks">Edit Tasks</a>
          </li>
          <li className="tab col s3">
            <a href="#textTab">textTab </a>
          </li>
        </ul>
      </div>
      <div id="publicTasks" className="col s12">
        <TaskList tasks={tasks.filter(t => !t.private)} />
      </div>
      <div id="completedTasks" className="col s12">
        <TaskList tasks={tasks.filter(t => t.completed)} />
      </div>
      <div id="editTasks" className="col s12">
        <List>
          {tasks.map((task, index) =>
            <ListItem
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
                  label="Delete" data-id={index}
                  onClick={() => actions.deleteTask(task)}
                />
              </div>
            </ListItem>)}
        </List>
      </div>
      <div id="textTab" className="col s12">
        <div>
          <h2>Controllable Tab B</h2>
          <p>
            This is another example of a controllable tab. Remember, if you
            use controllable Tabs, you need to give all of your tabs values or else
            you wont be able to select them.
          </p>
        </div>
      </div>
    </div>

  </div>);

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };
export default TasksView;
