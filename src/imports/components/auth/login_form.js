import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const LoginForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <div className="row input-field col s12">
      <Field name="username" component={renderField} placeholder="Placeholder" id="first_name" type="text" />
      <label htmlFor="username">username</label>
    </div>
    <div className="row input-field col s12">
      <Field name="password" component={renderField} placeholder="password" id="password" type="password" />
      <label htmlFor="password">password</label>
    </div>
    <button type="submit" className="waves-effect waves-light btn">
      Submit
    </button>
  </form>
);

export default reduxForm()(LoginForm);
