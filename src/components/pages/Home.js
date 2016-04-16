import React from 'react';
import TreeView from '../shared/tree/TreeView';
import { addItem } from '../../actions/tree/addItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

connect(state => ({
  tree: state.tree
}), {addItem});

class Home extends React.Component {
  handleFormSubmit(event) {
    const data = {
      advertiser: this.refs.advertiser.value,
      brand: this.refs.brand.value,
      product: this.refs.product.value
    };
    addItem(data);
    event.preventDefault();
  }

  render() {
    const { tree } = this.context.store.getState();

    return (
      <div>
        <div className="container">
          <div className="col-md-6">
            <form className="form-horizontal" onSubmit={this.handleFormSubmit.bind(this)}>
              <fieldset>
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="advertiser">Advertiser</label>
                  <div className="col-md-4">
                    <input id="advertiser" name="advertiser" ref="advertiser" type="text" placeholder="Advertiser" className="form-control input-md" required/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="brand">Brand</label>
                  <div className="col-md-4">
                    <input id="brand" name="brand" ref="brand" type="text" placeholder="Brand" className="form-control input-md" required/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="product">Product</label>
                  <div className="col-md-4">
                    <input id="product" name="product" ref="product" type="text" placeholder="Product" className="form-control input-md" required/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="addBtn"></label>
                  <div className="col-md-4">
                    <button id="addBtn" name="addBtn" className="btn btn-primary">Add</button>
                  </div>
                </div>

              </fieldset>
            </form>
          </div>
          <div className="col-md-6">
            <TreeView tree={tree} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tree: state.tree }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch)
}

Home.defaultProps = {
};

Home.contextTypes = {
  store: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
