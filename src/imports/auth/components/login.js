import React, { PropTypes, } from 'react';
import { reset, } from 'redux-form';
import { LoginForm, } from './form';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import * as AuthActions from '../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const LoginC = ({ actions, pushLogin, }, { router, }) =>

  // console.log('==========LOGIN ACTIONS PROP========', actions);
  // console.log('==========LOGIN context PROP========', router);
   (
     <div className="login">
       <LoginForm
         form={'loginForm'}
         onSubmit={actions.loginUser}
         onSubmitSuccess={(act, dis) => { resetForm('loginForm')(act, dis); return pushLogin(); }}

       />
     </div>);

LoginC.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

const mapStateToProps = ({ auth, }, { router, }) => {
  console.log('=======alt LOGIN props(=======', router);
  const pushLogin = () => router.push('/');
  return ({ auth, pushLogin, });
};

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginC);

export { Login, };