import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';
import { connect, } from 'react-redux';

const TaskForm = ({ handleSubmit, userID, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="text" component={TextField} hintText="What task" />
    <Field name="private" component={Toggle} label="Private?" />
    <Field name="completed" component={Checkbox} label="Is it done?" />
    <Field name="author" type="hidden" value={userID} component={TextField} />
    <FlatButton label="submit" type="submit" />
  </form>
);

const mapStateToProps = ({ auth: { user, }, }) =>
  ({ userID: () => user.id ? user.id : null, });

export default connect(mapStateToProps)(reduxForm()(TaskForm));
