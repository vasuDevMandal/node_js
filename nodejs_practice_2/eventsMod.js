const EventEmitter = require("events");

const door = new EventEmitter();

//register event listeners
door.on("open", () => {
  console.log("door opened.");
});
door.on("open", () => {
  console.log("hello guests");
});
let drill = () => {
  console.log("drill: ----->| ");
};
door.on("open", drill);
door.on("slide", () => {
  console.log("slide the door");
});
door.once("knock", () => {
  console.log("knock knock.");
});

console.log("registered events: ", door.eventNames());
console.log("max listener allowed: ", door.getMaxListeners());

door.setMaxListeners(100);

console.log("new limit - max listener allowed: ", door.getMaxListeners());

console.log('total "open" events: ', door.listenerCount("open"));

console.log('total "slide" events: ', door.listenerCount("slide"));

door.prependListener("ring", () => {
  console.log("ring ring ring...");
});
//on 'open' event this will execute first-this event listener added to top of the queue
door.prependListener("open", () => {
  console.log("first slammming the door");
});
console.log("new - registered events: ", door.eventNames());

// door.removeAllListeners("open");//remove all open events
// door.removeListener("open", drill); //remove one open event
// door.off("open", drill); // same as removeListener

// trigger the event
console.log();
door.emit("open"); //has 2 events - greetings ,door open
door.emit("slide");
door.emit("knock"); //once event
door.emit("ring");
door.emit("drill");
// 2-turn
console.log();
door.emit("open");
door.emit("slide");
door.emit("knock"); //not executed
door.emit("ring");
door.emit("drill");
