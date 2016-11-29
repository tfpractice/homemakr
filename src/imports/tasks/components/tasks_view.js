import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import TaskList from './list';

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
    <Tabs >
      <Tab label="Public Tasks" >
        <TaskList tasks={tasks.filter(t => !t.private)} />
      </Tab>
      <Tab label="Completed Tasks" >
        <TaskList tasks={tasks.filter(t => t.completed)} />
      </Tab>
      <Tab label="Tasks" value="b" >
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
                {task.author ? <p>task.author.username</p> : null}
                <FlatButton
                  label="Delete" data-id={index}
                  onClick={() => actions.deleteTask(task)}
                />
              </div>
            </ListItem>)}
        </List>
      </Tab>
      <Tab label="Tab B" value="c">
        <div>
          <h2>Controllable Tab B</h2>
          <p>
            This is another example of a controllable tab. Remember, if you
            use controllable Tabs, you need to give all of your tabs values or else
            you wont be able to select them.
          </p>
        </div>
      </Tab>
    </Tabs>

  </div>);

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };
export default TasksView;
