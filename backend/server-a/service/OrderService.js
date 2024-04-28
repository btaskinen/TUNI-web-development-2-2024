'use strict';

const { v4: uuidv4 } = require('uuid');

let orders = [];

/**
 * Add an order for an sandwich
 *
 * Unique id is created using uuid library. Orders are stored in orders array.
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
    resolve(orders);
  });
};
