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
    <label htmlFor="text">text
      <Field name="text" component={renderField2} id="text" type="text" placeholder="text" />
    </label>
    <Field
      name="completed" component={CheckBox} label="completed" type="checkbox" id="completed"
    />
    <Field
      name="private" component={CheckBox} label="private" toggle type="checkbox" id="private"
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
      name="text" component={renderField} id={`${id}_text`}
      type="text" placeholder="text"
    />
    <label htmlFor={`${id}_text`}> text </label>

    <Field
      name="completed" component={CheckBox} label="completed"
      id={`${id}_completed`}
    />

    <Field
      name="private" component={CheckBox} type="checkbox" id={`${id}_private`}
    />
    <button
      className="waves-effect waves-light btn"
      type="submit"
    >Submit</button>
  </form>
  );

//
// <form className="col m6" onSubmit={handleSubmit}>
//   <div className="row">
//     <div className="input-field col m6">
//       <Field name="text" component={renderField} id="text" type="text" placeholder="text" />
//       <label htmlFor="text"> text </label>
//     </div>
//     <div className="input-field col m2">
//       <Field
//         name="completed" component={renderField} type="checkbox" id="completed"
//       />
//       <label htmlFor="completed">completed</label>
//     </div>
//     <div className="input-field col m2">
//       <Field
//         name="private" component={renderField} type="checkbox" id="private"
//       />
//       <label htmlFor="private">private</label>
//     </div>
//   </div>
//
//   <button
//     className="waves-effect waves-light btn"
//     type="submit"
//   >Submit</button>
// </form>
const mapStateToProps = ({ auth: { user, }, }) =>
  ({});
export const EditForm = (reduxForm()(EditFormC));
export default connect(mapStateToProps)(reduxForm()(TaskForm));
