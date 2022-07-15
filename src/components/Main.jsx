import React, { useEffect, useState } from 'react';

import Loader from './Loader';

import { API_URL, API_KEY } from './Config';
import ProductList from './ProductList';
import Cart from './Cart';
import DisplayBasket from './DisplayBasket';
import { toast } from 'react-toastify';

const Main = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  // Show or Hide Basket
  const showBasket = () => {
    setIsBasketShow(!isBasketShow);
  };

  // Close Basket
  const closeBasket = () => {
    setIsBasketShow(false);
  };

  // Adding product to basket
  const addToBasket = (item) => {
    const itemIndex = orders.findIndex((order) => order.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrders([...orders, newItem]);
    } else {
      const newOrder = orders.map((order, idx) => {
        if (itemIndex === idx) {
          return {
            ...order,
            quantity: order.quantity + 1,
          };
        } else {
          return order;
        }
      });

      setOrders(newOrder);
    }

    toast.success('Product added to basket succesfully');
  };

  const removeFromBasket = (itemID) => {
    const newOrder = orders.filter((order) => order.id !== itemID);

    setOrders(newOrder);

    toast.error('Products removed out of basket');
  };

  const addOneItem = (id) => {
    const newOrders = orders.map((order) => {
      if (order.id === id) {
        return {
          ...order,
          quantity: order.quantity + 1,
        };
      } else {
        return order;
      }
    });

    setOrders(newOrders);

    toast.success('Product added to basket succesfully');
  };

  const removeOneItem = (id) => {
    let newOrders = orders.map((order) => {
      if (order.id === id) {
        const newQuantity = order.quantity;
        return {
          ...order,
          quantity: newQuantity ? newQuantity - 1 : 0,
        };
      } else {
        return order;
      }
    });

    newOrders = newOrders.filter((order) => order.quantity !== 0);

    setOrders(newOrders);

    toast.error('Product removed out of basket');
  };

  return (
    <div className="container content">
      <Cart quantity={orders.length} showBasket={showBasket} />
      {loading ? (
        <Loader />
      ) : (
        <ProductList products={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <DisplayBasket
          orders={orders}
          closeBasket={closeBasket}
          removeFromBasket={removeFromBasket}
          removeOneItem={removeOneItem}
          addOneItem={addOneItem}
        />
      )}
    </div>
  );
};

export default Main;
