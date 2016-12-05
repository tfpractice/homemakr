import React, { PropTypes, } from 'react';
import { reset, } from 'redux-form';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import LoginForm from './login_form';
import { AuthActions, } from '../../actions';
import Layer from 'grommet/components/Layer';
console.log(Layer);
const mapStateToProps = ({ auth, }) => ({ auth, });
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const LoginC = ({ actions, }, { router, }) => (
  <div className="login">
    <Layer className="col s12" peek>
      <p>Login</p>
      <t />
      <div className="row">
        <LoginForm
          className="col s12"
          form={'loginForm'}
          onSubmit={actions.loginUser}
          onSubmitSuccess={(act, dis) => {
            resetForm('loginForm')(act, dis);
            return router.push('/');
          }}
        />
      </div>
    </Layer>

    <LoginForm
      form={'loginForm'}
      onSubmit={actions.loginUser}
      onSubmitSuccess={(act, dis) => {
        resetForm('loginForm')(act, dis);
        return router.push('/');
      }}
    />
  </div>);

LoginC.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.object,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginC);

export { Login, };
