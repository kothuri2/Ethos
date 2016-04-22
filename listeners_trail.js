// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');


   
}
var listener_temp=function listener_temp(){
	console.log('I will be the next listener after data_received.');
}

// Bind the connection event with the handler

eventEmitter.on('connection', connectHandler);
 console.log("Count: "+ eventEmitter.listenerCount('connection')+ " Names: "+eventEmitter.listeners('connection'));
// Bind the data_received event with the anonymous function

eventEmitter.on('data_received', function(){console.log('data received succesfully.');});
eventEmitter.addListener('connection', listener_temp);
eventEmitter.once('connection', function(){console.log('I only live once.');});

//eventEmitter.removeAllListeners('connection');
//List all listeners



// Fire the connection event 
eventEmitter.emit('connection');
//why can't I remove one listener
eventEmitter.removeListener('connection', listener_temp);
eventEmitter.emit('connection');
console.log("Count: "+ eventEmitter.listenerCount('connection')+ " Names: "+eventEmitter.listeners('connection'));
//console.log("Count: "+ eventEmitter.listenerCount('connection')+ " Names: "+eventEmitter.listeners('connection'));
//console.log("Count: "+ eventEmitter.listenerCount('data_received')+ " Names: "+eventEmitter.listeners('data_received'));
console.log("Program Ended.");
