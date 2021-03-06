require('normalize.css');
require('styles/App.scss');

import Navigation from './layout/Navigation';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.propTypes = {
  children: React.PropTypes.object.isRequired
};

AppComponent.defaultProps = {
};

export default AppComponent;
