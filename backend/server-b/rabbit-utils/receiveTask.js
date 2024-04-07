#!/usr/bin/env node
// Process tasks from the work queue
// in our case an order for a sandwich

'use strict';

const rabbitmqHost = process.env.RABBITMQ_HOST || 'localhost';

const sendTask = require('./sendTask');

const amqp = require('amqplib');

module.exports.getTask = (rabbitHost, queueName) => {
  amqp
    .connect('amqp://' + rabbitHost)
    .then((connection) => {
      process.once('SIGINT', () => {
        connection.close();
      });
      return connection.createChannel().then((channel) => {
        let ok = channel.assertQueue(queueName, { durable: true });
        ok = ok.then(() => {
          channel.prefetch(1);
        });
        ok = ok.then(() => {
          channel.consume(queueName, doWork, { noAck: false });
          console.log(
            new Date(),
            ' [*] Waiting for messages. To exit press CTRL+C'
          );
        });

        return ok;

        function doWork(msg) {
          let body = msg.content.toString();
          console.log(" [x] Received '%s'", body);
          let secs = body.split('.').length - 1;
          //console.log(" [x] Task takes %d seconds", secs);
          setTimeout(() => {
            console.log(new Date(), ' [x] Done');
            channel.ack(msg);
            console.log('BODY', body);
            sendTask.addTask(rabbitmqHost, 'order-fulfilled', body);
          }, 10000);
        }
      });
    })
    .catch(console.warn);
};
