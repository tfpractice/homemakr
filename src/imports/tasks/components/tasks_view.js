import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import TaskList from './list';
import FilterLink from './filter_link';
import {FILTER_FUNCS} from '../constants';

import {reset} from 'redux-form';
import TaskForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({tasks, tasksReducer: {
        filter
    }}) => {
    console.log('isdie the component', filter);
    return ({
        tasks: tasks.filter(filter.func)
    });
};

const TasksView = ({tasks, actions}) => (
    <div className="tasks-list">
        <h1>
            TASKS
        </h1>
        <TaskForm
            form={'newTaskForm'}
            onSubmit={actions.createTask}
            onSubmitSuccess={resetForm('newTaskForm')}/>
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s3">
                        <FilterLink href="#publicTasks" actions={actions} filter="SHOW_ALL_TASKS">
                            SHOW_ALL_TASKS
                        </FilterLink>
                    </li>
                    <li className="tab col s3">
                        <FilterLink
                            href="#completedTasks"
                            actions={actions}
                            filter="SHOW_COMPLETED_TASKS">
                            SHOW_COMPLETED_TASKS
                        </FilterLink>
                    </li>
                    <li className="tab col s3 disabled">
                        <a href="#editTasks">Edit Tasks</a>
                    </li>
                    <li className="tab col s3 disabled">
                        <a href="#editTasks">Edit Tasks</a>
                    </li>
                    <li className="tab col s3 disabled">
                        <a href="#editTasks">Edit Tasks</a>
                    </li>
                </ul>
            </div>
            <TaskList actions={actions} tasks={tasks}/>

        </div>

        <div className="row">
            <Tabs className=''>
                <Tab className="" label="allTask">
                    <TaskList actions={actions} tasks={tasks}/>
                    <Slider name="slider0" defaultValue={0.5}/>
                </Tab>
                <Tab className="col m6" label="completedTasks">
                    <TaskList actions={actions} tasks={tasks.filter(t => t.completed)}/>
                    <Slider name="slider0" defaultValue={0.5}/>
                </Tab>
                <Tab className="col m6" label="privateTasks">
                    <TaskList actions={actions} tasks={tasks.filter(t => t.private)}/>
                    <Slider name="slider0" defaultValue={0.5}/>
                </Tab>
                <Tab className="col m6" label="doubleTask">
                    <TaskList actions={actions} tasks={tasks.concat(tasks)}/>
                    <Slider name="slider0" defaultValue={0.5}/>
                </Tab>
            </Tabs>
        </div>
    </div>
);

export default connect(mapStateToProps)(TasksView);
//
