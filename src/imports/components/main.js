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
          <Card
            label="Sample Label"
            heading="Sample Heading"
            description="Sample description providing more details."
          />
          <Accordion openMulti>
            <AccordionPanel heading="First Title">

              <Tabs>
                <Tab title="First Title">
                  <Paragraph>
                    First contents
                  </Paragraph>
                </Tab>
                <Tab title="Second Title">
                  <Paragraph>
                    Second contents
                  </Paragraph>
                </Tab>
              </Tabs>
            </AccordionPanel>
            <AccordionPanel heading="Second Title">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading="Third Title">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
          </Accordion>
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = { muiTheme: React.PropTypes.object, };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
