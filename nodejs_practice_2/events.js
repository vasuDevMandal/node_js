const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (number) => {
  console.log("event started.. number: " + number);
});
console.log("event starting in 5 seconds...");
setTimeout(() => {
  eventEmitter.emit("start", 1);
}, 5000);
