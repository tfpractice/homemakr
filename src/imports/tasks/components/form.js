import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle } from 'redux-form-material-ui';

const TaskForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="text" component={TextField} hintText="What task" />
    <Field name="private" component={Toggle} label="Private?" />
    <Field name="completed" component={Checkbox} label="Is it done?" />
    <FlatButton label="submit" type="submit" />
  </form>
);

export default reduxForm()(TaskForm);
