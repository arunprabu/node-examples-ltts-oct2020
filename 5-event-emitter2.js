const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('open_connection', (err, data) => {
  if(!err){
    console.log(data);
  }else{
    console.log(err);
  }
});

eventEmitter.emit('open_connection', null, 'Connection opened');
