import BasketItem from './BasketItem';

const DisplayBasket = ({
  orders,
  closeBasket,
  removeFromBasket,
  removeOneItem,
  addOneItem,
}) => {
  const totalPrice = orders.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Basket
        <span className="secondary-content">
          <i className="material-icons close-btn" onClick={closeBasket}>
            close
          </i>
        </span>
      </li>
      {orders.length ? (
        orders.map((order) => {
          return (
            <BasketItem
              key={order.id}
              {...order}
              removeFromBasket={removeFromBasket}
              removeOneItem={removeOneItem}
              addOneItem={addOneItem}
            />
          );
        })
      ) : (
        <li className="collection-item">No purchased products</li>
      )}
      <li className="collection-item active">Total price: {totalPrice}$ </li>
    </ul>
  );
};

export default DisplayBasket;
