import React, { Component, PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { reset, } from 'redux-form';
import Layer from 'grommet/components/Layer';

import RegisterForm from './register_form';
import { AuthActions, } from '../../actions';

const resetForm = name => (action, dispatch) => dispatch(reset(name));

const mapStateToProps = ({ auth, }) => ({ auth, });
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

class Register extends Component {
  state = { open: false, }
  showForm = () => {
    this.setState({ open: true, });
  }

  hideForm = () => {
    this.setState({ open: false, });
  };

  render() {
    const { auth: { registration, }, actions, router, } = this.props;
    return (
      <div className="registration">
        <a href="#!" onClick={this.showForm} className="waves-effect waves-green btn-flat ">REGISTER</a>
        <Layer className="col s12" hidden={!this.state.open}>
          <p>REGISTER</p>
          <div className="row">
            <RegisterForm
              form={'registerForm'}
              onSubmit={actions.registerUser}
              onSubmitSuccess={(act, dis) => {
                resetForm('registerForm')(act, dis);
                this.hideForm();
              }}
            />
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this.hideForm} className="waves-effect waves-green btn-flat ">Back</a>
          </div>
        </Layer>
      </div>);
  }
}

Register.contextTypes = { router: React.PropTypes.object, };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
