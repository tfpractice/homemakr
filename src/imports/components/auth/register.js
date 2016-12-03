import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';

import { RegisterForm, } from './form';
import { AuthActions, } from '../../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const resetAndRedirect = router => name => (act, dis) =>
resetForm(name)(act, dis) && router.push('/login');

const mapStateToProps = ({ auth, }) =>
  ({ auth, });

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const RegisterComp = ({ auth: { registration, }, actions, }, { router, }) => (
  <div className="registration">
    <FlatButton label="logout" onClick={actions.logoutUser} />

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

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComp);

export { Register, };
