import React from 'react';

const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeFromBasket,
  removeOneItem,
  addOneItem,
}) => {
  return (
    <li className="collection-item main-item">
      {name}: {price}$ x {quantity} = {price * quantity}$
      <span className="secondary-content">
        <button
          className="waves-effect waves-light btn"
          onClick={() => addOneItem(id)}
        >
          Add
          <i className="material-icons">add</i>
        </button>
        <button
          className="waves-effect waves-light btn"
          onClick={() => removeOneItem(id)}
        >
          Remove
          <i className="material-icons">remove</i>
        </button>
        <i
          className="material-icons delete-btn"
          onClick={() => removeFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
