'use strict';

const receiveTask = require('./rabbit-utils/receiveTask.js');

receiveTask.getTask('localhost', 'received-orders');
