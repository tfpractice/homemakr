import React, { Component, PropTypes, } from 'react';
import { reset, } from 'redux-form';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import LoginForm from './login_form';
import { AuthActions, } from '../../actions';
import Layer from 'grommet/components/Layer';
const mapStateToProps = ({ auth, }) => ({ auth, });
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

const resetForm = name => (action, dispatch) => dispatch(reset(name));

class LoginModal extends Component {
  state = { open: false, }
  showForm = () => {
    this.setState({ open: true, });
  }

  hideForm = () => {
    this.setState({ open: false, });
  };
  render() {
    const { actions, router, } = this.props;
    return (
      <div>
        <a href="#!" onClick={this.showForm} className="waves-effect waves-green btn-flat ">Hide</a>
        <a href="#!" onClick={this.hideForm} className="waves-effect waves-green btn-flat ">Show</a>
        <Layer className="col s12" hidden={this.state.open}>
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
          <div className="modal-footer">
            <a href="#!" onClick={this.showForm} className="waves-effect waves-green btn-flat ">Hide</a>
            <a href="#!" onClick={this.hideForm} className="waves-effect waves-green btn-flat ">Show</a>
          </div>
        </Layer>
      </div>);
  }

}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginModal);

export { Login, };
