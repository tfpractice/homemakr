import React, {Component, PropTypes} from 'react';

class Main extends Component {
    render() {
        return (
            <div id='main-view' className='container'>
              <h1>I AM THE MAIN Component IS THE MODULE HOT?</h1>
                <hr/> {this.props.children}
            </div>
        );
    };
}
if (module.hot) {
    module.hot.accept();

}

export default Main;
