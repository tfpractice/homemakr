import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import { List, ListItem, } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab, } from 'material-ui/Tabs';
import TasksView from './tasks_view';
import { reset, } from 'redux-form';
import TaskForm from './form';

console.log('\n==========DEPENDENT FILE===========');
console.log(__filename);
console.log('\n==========DEPENDENT FILE===========');
console.log(module.parent);
console.log('\n////////////DEPENDENT FILE/////////');

export default TasksView;
