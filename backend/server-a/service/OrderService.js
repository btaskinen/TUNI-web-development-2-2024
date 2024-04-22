'use strict';

const { v4: uuidv4 } = require('uuid');

let orders = [
  {
    sandwichId: 5,
    id: '83e26eac-aaaf-459e-88ac-712ad836f7dd',
    status: 'ready',
  },
];

/**
 * Add an order for an sandwich
 *
 * order Order place an order for a sandwich
 * returns Order
 **/
exports.addOrder = function (id) {
  return new Promise(function (resolve, reject) {
    const newId = uuidv4();
    const newOrder = {
      sandwichId: id,
      id: newId,
      status: 'received',
    };
    orders.push(newOrder);
    resolve(newOrder);
  });
};

/**
 * Find an order by its ID
 * IDs must be positive integers
 *
 * orderId Long ID of the order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function (orderId) {
  return new Promise(function (resolve, reject) {
    const requestedOrder = orders.find((order) => order.id === orderId);
    if (requestedOrder) {
      resolve(requestedOrder);
    } else {
      resolve('Order does not exist.');
    }
  });
};

/**
 * Update order status of specific order.
 * IDs must be positive integers.
 *
 * orderId Long ID of the order that needs to be fetched
 * returns Order
 **/
exports.updateOrder = function (orderToUpdate) {
  console.log('UPDATED ORDER', orderToUpdate.status);
  return new Promise((resolve, reject) => {
    const updatedOrder = {
      sandwichId: orderToUpdate.sandwichId,
      id: orderToUpdate.id,
      status: 'ready',
    };

    const newOrders = orders.map((order) => {
      if (order.id === updatedOrder.id) return updatedOrder;
      return order;
    });

    orders = newOrders;
    resolve(newOrders);
  });
};

/**
 * Get a list of all orders. Empty array if no orders are found.
 *
 * returns ArrayOfOrders
 **/
exports.getOrders = function () {
  return new Promise(function (resolve, reject) {
    if (Object.keys(orders).length > 0) {
      resolve(orders);
    } else {
      resolve('No orders');
    }
  });
};
