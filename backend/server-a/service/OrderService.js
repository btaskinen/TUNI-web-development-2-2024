'use strict';

const { v4: uuidv4 } = require('uuid');

let orders = [
  {
    sandwichId: 7,
    id: '83e26eac-aaaf-459e-88ac-712ad836f7dd',
    status: 'ordered',
  },
];

/**
 * Add an order for an sandwich
 *
 * order Order place an order for a sandwich
 * returns Order
 **/
exports.addOrder = function (order) {
  return new Promise(function (resolve, reject) {
    const newId = uuidv4();
    const newOrder = {
      sandwichId: order.sandwichId,
      id: newId,
      status: order.status,
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
