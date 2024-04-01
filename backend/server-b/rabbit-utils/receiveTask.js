#!/usr/bin/env node
// Process tasks from the work queue
// in our case an order for a sandwich

'use strict';

let amqp = require('amqplib');

module.exports.getTask = (rabbitHost, queueName) => {
  console.log('HELLO FROM SERVER B');
  amqp
    .connect('amqp://' + rabbitHost)
    .then((connection) => {
      process.once('SIGINT', () => {
        connection.close();
      });
      return connection.createChannel().then((channel) => {
        let ok = channel.assertQueue(queueName, { durable: true });
        ok = ok.then(function () {
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
          var body = msg.content.toString();
          console.log(" [x] Received '%s'", body);
          var secs = body.split('.').length - 1;
          //console.log(" [x] Task takes %d seconds", secs);
          setTimeout(function () {
            console.log(new Date(), ' [x] Done');
            ch.ack(msg);
          }, 10000);
        }
      });
    })
    .catch(console.warn);
};
