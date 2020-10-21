const events = require('events');

const eventEmitter = new events.EventEmitter();

// defining custom event
eventEmitter.on('connection_open', () => {
  console.log('Connection Opened via custom event');
});

eventEmitter.emit('connection_open');

console.log('Program Ended');
 