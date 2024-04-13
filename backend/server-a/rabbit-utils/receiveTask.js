#!/usr/bin/env node
// Process tasks from the work queue

'use strict';

const amqp = require('amqplib');
const Order = require('../service/OrderService');

module.exports.getTask = (rabbitHost, queueName) => {
  amqp
    .connect('amqp://' + rabbitHost)
    .then((connection) => {
      process.once('SIGINT', () => {
        connection.close();
      });
      return connection.createChannel().then((channel) => {
        var ok = channel.assertQueue(queueName, { durable: true });
        ok = ok.then(() => {
          channel.prefetch(1);
        });
        ok = ok.then(() => {
          channel.consume(queueName, doWork, { noAck: false });
          console.log(' [*] Waiting for messages. To exit press CTRL+C');
        });
        return ok;

        function doWork(msg) {
          const bodyJSONString = JSON.parse(msg.content.toString());
          const bodyObject = JSON.parse(bodyJSONString);
          Order.updateOrder(bodyObject);
          console.log(" [x] Received '%s'", bodyJSONString);
          console.log(' [x] Done');
          channel.ack(msg);
        }
      });
    })
    .catch(console.warn);
};
