import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { connect, } from 'react-redux';
import CheckBox from 'grommet/components/CheckBox';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );
const renderField2 = field => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched && field.meta.error &&
    <span className="error">{field.meta.error}</span>}
  </div>
    );

const TaskForm = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field name="text" component="input" id="text" type="text" placeholder="text" />
    <Field
      name="completed" component={({ input, }) => <CheckBox {...input} label={input.label} />} label="completed" type="checkbox" id="completed"
    />
    <Field
      name="private" component={({ input, }) => <CheckBox {...input} />} label="private" toggle type="checkbox" id="private"
    />
    <button
      className="waves-effect waves-light btn"
      type="submit"
    >Submit</button>
  </form>
    );

const EditFormC = ({ task: { id, }, handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="text" component="input" id={`${id}_text`}
      type="text" placeholder="text"
    />
    <label htmlFor={`${id}_text`}> text </label>

    <Field
      name="completed" component={({ input, }) => <CheckBox {...input} />} label="completed"
      id={`${id}_completed`}
    />

    <Field
      name="private" component={({ input, }) => <CheckBox {...input} />} type="checkbox" id={`${id}_private`}
    />
    <button
      className="waves-effect waves-light btn"
      type="submit"
    >Submit</button>
  </form>
  );

const mapStateToProps = ({ auth: { user, }, }) =>
  ({});
export const EditForm = (reduxForm()(EditFormC));
export default connect(mapStateToProps)(reduxForm()(TaskForm));
