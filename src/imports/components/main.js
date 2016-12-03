import React, { Component, PropTypes, } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { AuthActions, } from '../actions';
import Nav from './nav';
import $ from 'jquery';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });
  
class Main extends Component {
  componentDidMount() {
    // $('ul.tabs').tabs();
  }
  render() {
    const { actions, } = this.props;
    return (

      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" className="container">
          <Nav logout={actions.logoutUser} />
          <hr />
          {this.props.children}
        </div>

      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
