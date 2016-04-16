import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

class TreeNode extends React.Component {
  componentWillMount() {
    this.setState({
      visible: true
    });
  }

  toggle() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    var childNodes;
    var classObj;
    var timestamps;

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map(function(node, index) {
        return <li key={index}><TreeNode node={node} /></li>
      });

      classObj = {
        togglable: true,
        'togglable-down': this.state.visible,
        'togglable-up': !this.state.visible
      };
    }
    else {
      timestamps = this.props.node.timestamps.map(function(timestamp, index) {
        return <li key={index}>{moment.unix(timestamp).format('MM/DD/YYYY hh:mm:ss')}</li>
      });
    }

    var style;
    if (!this.state.visible) {
      style = {display: 'none'};
    }

    return (
      <div>
        <h5 onClick={this.toggle} className={classNames(classObj)}>
          {this.props.node.title}
        </h5>
        <ul style={style}>
          {childNodes}
          {timestamps}
        </ul>
      </div>
    );
  }
}

TreeNode.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default TreeNode;
