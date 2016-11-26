import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { RegisterForm, } from './form';
import * as AuthActions from '../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const RegisterComp = ({ actions, pushLogin, }, { router, }) =>

  // console.log('==========ATUH ACTIONS PROP========', actions);
  // console.log('==========ATUH context PROP========', router);
   (
     <div className="registration">
       <RegisterForm
         form={'registerForm'}
         onSubmit={actions.registerUser}
         onSubmitSuccess={(act, dis) => { resetForm('registerForm')(act, dis); return pushLogin(); }}

       />
     </div>);

RegisterComp.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

const mapStateToProps = ({ auth, }, { router, }) => {
  console.log('=======alt props(=======', router);
  const pushLogin = () => router.push('/login');
  return ({ auth, pushLogin, });
};

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComp);

export { Register, };