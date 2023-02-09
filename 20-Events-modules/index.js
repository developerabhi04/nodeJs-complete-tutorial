
// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("your name is abhishek")
// })

// event.on("sayMyName", () => {
//     console.log("your name is kumar")
// })

// event.on("sayMyName", () => {
//     console.log("your name is jain")
// })













const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");