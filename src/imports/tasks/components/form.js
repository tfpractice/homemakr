import React, { PropTypes, } from 'react';
import { reduxForm, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';
import { connect, } from 'react-redux';

const renderField = field => (
  <input {...field.input} type="checkbox" />
  );
const TaskForm = ({ handleSubmit, userID, }) => (
  <form className="col m6" onSubmit={handleSubmit}>
    <div className="row">
      <div className="input-field col m6">
        <label htmlFor="text"> text </label>
        <Field name="text" component="input" />
      </div>
      <div className="input-field col m6">
        <label htmlFor="private">private</label>
        <Field
          name="completed" component={renderField} type="checkbox"
        />
      </div>
      <div className="input-field col m6">
        <label htmlFor="private">private</label>
        <Field
          name="private" component={renderField} type="checkbox"
        />
      </div>
    </div>

    <button
      className="waves-effect waves-light btn"
      type="submit"
    >Submit</button>
  </form>
  );

//   <Field name="text" component={TextField} hintText="What task" />
//   <Field name="private" component={Toggle} label="Private?" />
//   <Field name="completed" component={Checkbox} label="Is it done?" />
//   <Field name="author" type="hidden" value={userID} component={TextField} />
//   <FlatButton label="submit" type="submit" />
// </form>
const mapStateToProps = ({ auth: { user, }, }) =>
  ({ userID: () => user.id ? user.id : null, });

export default connect(mapStateToProps)(reduxForm()(TaskForm));
