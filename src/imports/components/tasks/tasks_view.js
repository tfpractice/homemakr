import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Animate from 'grommet/components/Animate';
import TaskList from './list';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ auth: { user, }, tasks, tasksReducer: { filter, }, }) =>
 ({ tasks, canCreate: true && user, });

const TasksView = ({ tasks, actions, canCreate, }) => (
  <div className="tasks-list">
    <h1>
      TASKS new text hot?
    </h1>
    <TaskForm
      form={'newTaskForm'}
      onSubmit={actions.createTask}
      onSubmitSuccess={resetForm('newTaskForm')}
    />

    <Tabs >

      <Tab title="allTask">
        <Animate
          enter={{ animation: 'slide-left', duration: 300, }}
          leave={{ animation: 'slide-down', duration: 300, }}
          visible
        >
          <TaskList actions={actions} tasks={tasks} />
        </Animate>
      </Tab>

      <Tab title="completedTasks">
        <Animate
          enter={{ animation: 'slide-left', duration: 300, }}
          leave={{ animation: 'slide-down', duration: 300, }}
        >
          <TaskList actions={actions} tasks={tasks.filter(t => t.completed)} />
        </Animate>
      </Tab>

      <Tab title="privateTasks">
        <Animate
          enter={{ animation: 'slide-left', duration: 300, }}
          leave={{ animation: 'slide-down', duration: 300, }}

        >
          <TaskList actions={actions} tasks={tasks.filter(t => t.private)} />
        </Animate>
      </Tab>

    </Tabs>

  </div>
);

export default connect(mapStateToProps)(TasksView);
