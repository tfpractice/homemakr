import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { actions as TaskActions, TasksView, } from '../tasks';
import { Button, Card, Row, Col, Icon, } from 'react-materialize';

const Home = ({ dispatch, tasks, tasksReducer, children, }) => (
  <div id="todo-list">
    <Row>
      <Col m={6} >
        <Card className="blue-grey darken-1" textClassName="white-text" title="Card title" >
          <Button floating className="red" waves="light" icon="add" />
          <Button node="a" waves="light"><Icon right>file_cloud</Icon>button</Button>
        </Card>
      </Col>
    </Row>
    <h1> TASKS </h1>
    <TasksView tasks={tasks} actions={(bindActionCreators(TaskActions, dispatch))} />
    {children}
  </div>
    );

Home.needs = [ TaskActions.getTasks, ];

Home.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = ({ tasks, numbers, tasksReducer, auth, }) =>
   ({ tasks, auth, numbers, tasksReducer, });

export default connect(mapStateToProps)(Home);
