import React from 'react';

const Cart = ({ quantity = 0, showBasket = Function.prototype }) => {
  return (
    <div className="cart rounded cyan lighten-2" onClick={showBasket}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
