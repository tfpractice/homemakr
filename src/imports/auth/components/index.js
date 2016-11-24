import React, { PropTypes, } from 'react';
import { reduxForm, reset, Field, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { Checkbox, TextField, Toggle, } from 'redux-form-material-ui';
import { RegisterForm, LoginForm, } from './form';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { actions as AuthActions, } from '../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const Register = ({ actions, }, { router, }) => {
  console.log('==========ATUH ACTIONS PROP========', actions);
  console.log('==========ATUH context PROP========', router);
  return (
    <div className="registration">
      <RegisterForm
        form={'registerForm'}
        onSubmit={actions.registerUser}
        onSubmitSuccess={resetForm('registerForm')}
      />
    </div>);
};

Register.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

const Login = ({ actions, }, { router, }) => {
  console.log('==========LOGIN ACTIONS PROP========', actions);
  console.log('==========LOGIN context PROP========', router);
  return (
    <div className="login">
      <LoginForm
        form={'LoginForm'}
        onSubmit={actions.loginUser}
        onSubmitSuccess={resetForm('registerForm')}
      />
    </div>);
};

// const mapStateToProps = ({ auth, }) => ({ auth, });
// const mapDispatchToProps = dispatch =>
// ({ actions: bindActionCreators(AuthActions)(dispatch), });
// const Login = connect(mapStateToProps, mapDispatchToProps)(LoginC);

Login.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

export { Register, Login, };
