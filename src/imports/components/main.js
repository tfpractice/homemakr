import React, { Component, PropTypes, } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { AuthActions, } from '../actions';
import Nav from './nav';
import Card from 'grommet/components/Card';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators(AuthActions, dispatch), });

class Main extends Component {
  componentDidMount() {
    // require('grommet/scss/vanilla/index.scss');
  }

  render() {
    const { actions, children, } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false, })}>
        <div id="main-view" className="container">
          <Nav logout={actions.logoutUser} />
          <hr />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
