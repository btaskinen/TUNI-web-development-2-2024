#!/usr/bin/env node
// Post a new task to the work queue
// in our case an order for a sandwich

'use strict';

const amqp = require('amqplib');

module.exports.addTask = (rabbitHost, queueName, order) => {
  console.log(order);
  amqp
    .connect('amqp://' + rabbitHost)
    .then((connection) => {
      connection.createConfirmChannel().then((channel) => {
        channel.sendToQueue(
          queueName,
          new Buffer.from(JSON.stringify(order)),
          {
            persistent: true,
          },
          (err, ok) => {
            if (err !== null) console.warn(new Date(), 'Message nacked!');
            else {
              console.log(new Date(), 'Message acked');
            }
          }
        );
      });
    })
    .catch((error) => console.log(error));
};
