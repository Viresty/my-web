import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from './../actions/cart';

import Shelf from './shelf';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const cartList = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });
    return (
      <div className="Cart">
        <Shelf addItem={this.props.addToCart}/>
        <h2>Shopping Bag</h2>
        <ol>
            {cartList}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cart = state.cart;
  return {
    cart
  };
};


const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

