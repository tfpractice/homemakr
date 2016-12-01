import React, { PropTypes, Component, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'react-materialize';
import TaskList from './list';

// import $ from 'jquery';

// const jQuery = $;

// console.log($('.tabs').tabs());
// const cheerioTab = require('materialize-css/js/tabs')(...jQuery);

// import 'materialize-css';

// import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';
// import 'materialize-loader';

// require('materialize-css/sass/materialize.scss');

// window.$ = window.jQuery = $ = require('jquery');

import { reset, } from 'redux-form';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

class TasksView extends Component {
  componentDidMount() {
    console.log('mounting');
    $('ul.tabs').on('show', (...args) => {
      console.log('show args', args);
    });
  }
  render() {
    const { tasks, actions, } = this.props;
    return (
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
            </ul>
          </div>
          <div id="publicTasks" className="col s12">
            <TaskList actions={actions} tasks={tasks.filter(t => !t.private)} />
          </div>
          <div id="completedTasks" className="col s12">
            <TaskList actions={actions} tasks={tasks.filter(t => t.completed)} />
          </div>
          <div id="editTasks" className="col s12">
            <TaskList actions={actions} tasks={tasks.filter(t => t.author)} />
          </div>

        </div>
      </div>);
  }

}

// const TasksView = ({ tasks, actions, }) => (
//   <div className="tasks-list">
//     <TaskForm
//       form={'newTaskForm'}
//       onSubmit={actions.createTask}
//       onSubmitSuccess={resetForm('newTaskForm')}
//     />
//     <div className="row">
//       <div className="col s12">
//         <ul className="tabs">
//           <li className="tab col s3">
//             <a href="#publicTasks">Public Tasks</a>
//           </li>
//           <li className="tab col s3">
//             <a href="#completedTasks">completedTasks</a>
//           </li>
//           <li className="tab col s3 disabled">
//             <a href="#editTasks">Edit Tasks</a>
//           </li>
//         </ul>
//       </div>
//       <div id="publicTasks" className="col s12">
//         <TaskList actions={actions} tasks={tasks.filter(t => !t.private)} />
//       </div>
//       <div id="completedTasks" className="col s12">
//         <TaskList actions={actions} tasks={tasks.filter(t => t.completed)} />
//       </div>
//       <div id="editTasks" className="col s12">
//         <TaskList actions={actions} tasks={tasks.filter(t => t.author)} />
//       </div>
//
//     </div>
//   </div>);

export default TasksView;
