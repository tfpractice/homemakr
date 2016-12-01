import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';
import { connect, } from 'react-redux';

const renderField = ({ input, type, id, }) => (
  <input {...input} type={type} id={id} />
  );

const TaskForm = ({ handleSubmit, }) => (
  <form className="col m6" onSubmit={handleSubmit}>
    <div className="row">
      <div className="input-field col m6">
        <Field name="text" component={renderField} id="text" type="text" placeholder="text" />
        <label htmlFor="text"> text </label>
      </div>
      <div className="input-field col m2">
        <Field
          name="completed" component={renderField} type="checkbox" id="completed"
        />
        <label htmlFor="completed">completed</label>
      </div>
      <div className="input-field col m2">
        <Field
          name="private" component={renderField} type="checkbox" id="private"
        />
        <label htmlFor="private">private</label>
      </div>
    </div>

    <button
      className="waves-effect waves-light btn"
      type="submit"
    >Submit</button>
  </form>
    );

const EditFormC = ({ task: { id, }, handleSubmit, }) => {
  console.log('task', id);
  return (
    <form className="col m6" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col m6">
          <Field
            name="text" component={renderField} id={`${id}_text`}
            type="text" placeholder="text"
          />
          <label htmlFor={`${id}_text`}> text </label>
        </div>
        <div className="input-field col m2">
          <Field
            name="completed" component={renderField} type="checkbox"
            id={`${id}_completed`}
          />
          <label htmlFor={`${id}_completed`}>completed</label>
        </div>
        <div className="input-field col m2">
          <Field
            name="private" component={renderField} type="checkbox" id={`${id}_private`}
          />
          <label htmlFor={`${id}_private`}>private</label>
        </div>
      </div>
      <button
        className="waves-effect waves-light btn"
        type="submit"
      >Submit</button>
    </form>
  );
};

const mapStateToProps = ({ auth: { user, }, }) =>
  ({});
export const EditForm = (reduxForm()(EditFormC));
export default connect(mapStateToProps)(reduxForm()(TaskForm));
