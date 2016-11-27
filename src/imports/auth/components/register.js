import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import { RegisterForm, } from './form';
import * as AuthActions from '../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));
const resetAndRedirect = router => name => (act, dis) =>
resetForm(name)(act, dis) && router.push('/login');

const RegisterComp = ({ auth: { registration, }, actions, }, { router, }) => (
  <div className="registration">
    <RegisterForm
      form={'registerForm'}
      onSubmit={actions.registerUser}
      onSubmitSuccess={resetAndRedirect(router)('registerForm')}
    />
  </div>);

RegisterComp.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

// const registerFailed= ({registration:{status}})=> status==='failed';
const mapStateToProps = ({ auth, }, { router, }) =>
  ({ auth, });

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComp);

export { Register, };
