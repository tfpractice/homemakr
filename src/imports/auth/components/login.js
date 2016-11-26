import React, { PropTypes, } from 'react';
import { reset, } from 'redux-form';
import { LoginForm, } from './form';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import * as AuthActions from '../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const LoginC = ({ actions, }, { router, }) =>

  // console.log('==========LOGIN ACTIONS PROP========', actions);
  // console.log('==========LOGIN context PROP========', router);
   (
     <div className="login">
       <LoginForm
         form={'LoginForm'}
         onSubmit={actions.loginUser}
         onSubmitSuccess={resetForm('registerForm')}
       />
     </div>);

const mapStateToProps = ({ auth, }) => ({ auth, });
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginC);

export { Login, };
