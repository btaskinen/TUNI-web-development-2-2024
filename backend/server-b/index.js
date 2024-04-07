'use strict';

const rabbitmqHost = process.env.RABBITMQ_HOST || 'localhost';

const receiveTask = require('./rabbit-utils/receiveTask.js');

receiveTask.getTask(rabbitmqHost, 'received-orders');
