import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const RegisterForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>

    <div className="row input-field col s12">
      <Field name="username" component={renderField} placeholder="username" id="username" type="text" />
      <label htmlFor="username">username</label>
    </div>
    <div className="row input-field col s12">
      <Field name="password" component={renderField} placeholder="password" id="password" type="password" />
      <label htmlFor="password">password</label>
    </div>
    <div className="row input-field col s12">
      <Field name="email" component={renderField} placeholder="email" id="email" type="text" />
      <label htmlFor="email">email</label>
    </div>
    <div className="row input-field col s12">
      <Field name="name" component={renderField} placeholder="name" id="name" type="text" />
      <label htmlFor="name">name</label>
    </div>

    <button
      className="waves-effect waves-light btn" type="submit"
    >Submit
    </button>
  </form>
);

export default reduxForm()(RegisterForm);

// export const LoginForm = reduxForm()(LoginFormComp);
