import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';
import RegisterForm from './form';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const Register = ({ actions, }) => {
  console.log('==========ATUH ACTIONS PROP========', actions);
  return (
    <div className="registration">
      <RegisterForm
        form={'registerForm'}
        onSubmit={actions.registerUser}
        onSubmitSuccess={resetForm('registerForm')}
      />
    </div>);
};

Register.contextTypes = { muiTheme: React.PropTypes.object, };

export default Register;