'use strict';

const utils = require('../utils/writer.js');
const Order = require('../service/OrderService');
const sendTask = require('../rabbit-utils/sendTask.js');

module.exports.addOrder = function addOrder(req, res, next) {
  const order = req.swagger.params['order'].value;
  Order.addOrder(order)
    .then(function (response) {
      utils.writeJson(res, response);
      sendTask.addTask('localhost', 'received-orders', response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById(req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  Order.getOrderById(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrders = function getOrders(req, res, next) {
  Order.getOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
