import React from 'react';
import TreeNode from './TreeNode';

class TreeView extends React.Component {
  render() {
    return (
      <div className="container">
      {this.props.tree.map(function(childTree, index) {
        return <TreeNode key={index} node={childTree} />;
      })}
      </div>
    );
  }
}

TreeView.propTypes = {
  tree: React.PropTypes.array.isRequired
};

export default TreeView;
