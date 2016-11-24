import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';

const RegisterFormComp = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="username" component={TextField} hintText="username" />
    <Field name="name" component={TextField} hintText="name" />
    <Field name="email" component={TextField} hintText="email" />
    <Field name="password" component={TextField} type="password" hintText="password" />
    <FlatButton label="submit" type="submit" />
  </form>
);

const RegisterForm = reduxForm()(RegisterFormComp);
export default RegisterForm;
